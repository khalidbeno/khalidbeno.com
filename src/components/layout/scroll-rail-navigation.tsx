'use client';
import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/config/locales';
import { sections, type SectionKey } from '@/config/sections';

export function ScrollRailNavigation({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<SectionKey>('home');
  const rail = useRef<HTMLElement>(null);
  useEffect(() => {
    const elements = sections.map(({ key }) => document.getElementById(key)!);
    let frame = 0;
    const markActive = () => {
      const line = innerHeight * 0.35;
      const section =
        elements.find((element) => {
          const rect = element.getBoundingClientRect();
          return rect.top <= line && rect.bottom > line;
        }) ?? elements[0];
      const key = section.id as SectionKey;
      setActive(key);
      document.dispatchEvent(
        new CustomEvent('portfolio-section', { detail: key }),
      );
    };
    const update = () => {
      frame = 0;
      const maximum = document.documentElement.scrollHeight - innerHeight;
      const progress =
        maximum > 0 ? Math.min(1, Math.max(0, scrollY / maximum)) : 0;
      rail.current?.style.setProperty('--scroll-progress', String(progress));
      if (progress >= 0.999) {
        setActive('notes');
        document.dispatchEvent(
          new CustomEvent('portfolio-section', { detail: 'notes' }),
        );
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(markActive, {
      rootMargin: '-34% 0px -65% 0px',
      threshold: 0,
    });
    elements.forEach((element) => observer.observe(element));
    const resize = new ResizeObserver(() => {
      schedule();
      markActive();
    });
    resize.observe(document.documentElement);
    const click = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
          : null;
      if (!link) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      const disclosure = link.closest('details');
      if (disclosure) disclosure.open = false;
      target.focus({ preventScroll: true });
    };
    document.addEventListener('click', click);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    markActive();
    update();
    return () => {
      observer.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      document.removeEventListener('click', click);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  return (
    <nav
      ref={rail}
      className="scroll-rail"
      aria-label={
        locale === 'es' ? 'Secciones del portfolio' : 'Portfolio sections'
      }
    >
      <a
        href="#home"
        className="wordmark rail-signature"
        aria-label="Khaled Beno — Home"
      >
        KB
      </a>
      <div className="rail-index">
        <span className="rail-track" aria-hidden="true">
          <span className="rail-progress" />
        </span>
        <ol>
          {sections.map((section, index) => (
            <li key={section.key}>
              <a
                href={`#${section.key}`}
                aria-current={active === section.key ? 'location' : undefined}
              >
                <span className="rail-dot" aria-hidden="true" />
                <span className="rail-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{section.labels[locale]}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
