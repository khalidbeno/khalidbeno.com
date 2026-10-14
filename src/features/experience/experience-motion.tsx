'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Progressive enhancement: server content is always visible. */
export function ExperienceMotion() {
  useEffect(() => {
    const section = document.getElementById('experience');
    if (!section || !('IntersectionObserver' in window)) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(
      '(min-width: 1101px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)',
      () => {
        const stage = section.querySelector<HTMLElement>('.experience-stage')!;
        const windowElement = section.querySelector<HTMLElement>(
          '.experience-timeline-window',
        )!;
        const timeline = section.querySelector<HTMLElement>(
          '.experience-timeline',
        )!;
        const cards = Array.from(
          section.querySelectorAll<HTMLElement>('.experience-card'),
        );
        const entries = Array.from(
          section.querySelectorAll<HTMLElement>('.timeline-entry'),
        );
        const route = section.querySelector<SVGPathElement>(
          '.islands-story-path',
        )!;
        const labels = Array.from(
          section.querySelectorAll<HTMLElement>('.island-label'),
        );
        section.dataset.story = 'true';
        const travel = () => Math.round(innerHeight * 3);
        const size = () =>
          section.style.setProperty('--story-travel', travel() + 'px');
        size();
        const context = gsap.context(() => {
          const story = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: section,
              start: 'top 76px',
              end: () => '+=' + travel(),
              scrub: true,
              invalidateOnRefresh: true,
              onRefreshInit: size,
              onRefresh: (trigger) => {
                section.dataset.storyStart = String(trigger.start);
                section.dataset.storyEnd = String(trigger.end);
              },
              onUpdate: (trigger) => {
                const progress = trigger.progress;
                const scene =
                  progress < 0.12
                    ? 0
                    : progress < 0.3
                      ? 1
                      : progress < 0.42
                        ? 2
                        : progress < 0.6
                          ? 3
                          : progress < 0.78
                            ? 4
                            : 5;
                section.dataset.scene = String(scene);
                section.style.setProperty(
                  '--story-progress',
                  String(Math.max(0, Math.min(1, (progress - 0.12) / 0.73))),
                );
                entries.forEach((entry, index) => {
                  const active = scene === [1, 3, 4, 5][index];
                  entry.dataset.active = String(active);
                  entry.dataset.complete = String(scene > [1, 3, 4, 5][index]);
                });
              },
            },
          });
          story.to({}, { duration: 1 });
          gsap.set(cards, {
            opacity: 0.55,
            scale: 0.98,
            x: 8,
            transformOrigin: 'left center',
          });
          gsap.set(labels, { opacity: 0.75, scale: 0.98 });
          gsap.set(route, { strokeDasharray: 1, strokeDashoffset: 1 });
          const stops = [0.12, 0.42, 0.6, 0.78];
          const ends = [0.3, 0.6, 0.78, 1];
          cards.forEach((card, index) => {
            story.to(
              card,
              { opacity: 1, scale: 1, x: 0, duration: 0.035 },
              stops[index],
            );
            if (index < 3)
              story.to(
                card,
                { opacity: 0.55, scale: 0.98, x: 8, duration: 0.035 },
                ends[index],
              );
            story.to(
              timeline,
              {
                y: () =>
                  -Math.min(
                    Math.max(0, entries[index].offsetTop - 64),
                    Math.max(
                      0,
                      timeline.offsetHeight - windowElement.clientHeight,
                    ),
                  ),
                duration: 0.07,
              },
              Math.max(0, stops[index] - 0.04),
            );
            story.fromTo(
              card.querySelectorAll('.tag'),
              { opacity: 0.7 },
              { opacity: 1, duration: 0.03, stagger: 0.005 },
              stops[index],
            );
          });
          story.to(labels[0], { opacity: 1, scale: 1, duration: 0.08 }, 0.1);
          story.to(
            labels[0],
            { opacity: 0.7, scale: 0.98, duration: 0.12 },
            0.3,
          );
          story.to(labels[1], { opacity: 1, scale: 1, duration: 0.12 }, 0.3);
          story.to(route, { strokeDashoffset: 0, duration: 0.23 }, 0.18);
          story.to(
            '.islands-traveller',
            { offsetDistance: '100%', opacity: 0.7, duration: 0.23 },
            0.18,
          );
          story.to('.islands-traveller', { opacity: 0, duration: 0.03 }, 0.41);
          story.to('.islands-float', { y: -4, duration: 0.9 }, 0);
          story.to('.islands-atmosphere', { x: 4, duration: 0.9 }, 0);
          story.fromTo(
            '.experience-intro-copy',
            { opacity: 0.82, y: 6 },
            { opacity: 1, y: 0, duration: 0.1 },
            0,
          );
          story.to(
            section,
            { '--dublin-light': 0.1, '--madrid-light': 0.45, duration: 0.16 },
            0.26,
          );
          story.to(stage, { y: -22, opacity: 0.82, duration: 0.12 }, 0.88);
          const projects = document.getElementById('projects');
          if (projects) {
            const preview = () => Math.min(160, innerHeight * 0.18);
            story.to(projects, { y: () => -preview(), duration: 0.12 }, 0.88);
            gsap.fromTo(
              projects,
              { y: () => -preview() },
              {
                y: 0,
                ease: 'none',
                immediateRender: false,
                scrollTrigger: {
                  trigger: section,
                  start: 'bottom bottom',
                  end: () => '+=' + preview() * 2,
                  scrub: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          }
          const focus = (event: FocusEvent) => {
            if (
              event.target instanceof Element &&
              event.target.closest('.timeline-projects')
            ) {
              // Keyboard access never requires traversing the virtual scroll story.
              gsap.set(timeline, {
                y: -Math.max(
                  0,
                  timeline.offsetHeight - windowElement.clientHeight,
                ),
              });
            }
          };
          section.addEventListener('focusin', focus);
          return () => section.removeEventListener('focusin', focus);
        }, section);
        const image = section.querySelector('img.experience-illustration');
        const refresh = () => ScrollTrigger.refresh();
        let resizeFrame = 0;
        const resize = () => {
          cancelAnimationFrame(resizeFrame);
          resizeFrame = requestAnimationFrame(refresh);
        };
        window.addEventListener('resize', resize);
        image?.addEventListener('load', refresh);
        let alive = true;
        void document.fonts.ready.then(() => {
          if (alive) refresh();
        });
        refresh();
        return () => {
          alive = false;
          cancelAnimationFrame(resizeFrame);
          window.removeEventListener('resize', resize);
          image?.removeEventListener('load', refresh);
          context.revert();
          delete section.dataset.story;
          delete section.dataset.scene;
          delete section.dataset.storyStart;
          delete section.dataset.storyEnd;
          section.style.removeProperty('--story-travel');
          section.style.removeProperty('--story-progress');
          section.style.removeProperty('--dublin-light');
          section.style.removeProperty('--madrid-light');
          entries.forEach((entry) => {
            delete entry.dataset.active;
            delete entry.dataset.complete;
          });
        };
      },
    );
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const seen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        if (section.dataset.story === 'true') return;
        let delay = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          if (entry.target.classList.contains('experience-islands')) {
            entry.target.setAttribute('data-live', 'true');
          } else {
            const animation = entry.target.animate(
              [
                { opacity: 0.45, transform: 'translateY(8px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 480, delay, easing: 'cubic-bezier(.2,.65,.3,1)' },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
            delay += 70;
          }
        }
      },
      { threshold: 0.12 },
    );
    section
      .querySelectorAll('.experience-islands, .experience-card')
      .forEach((element) => observer.observe(element));
    const stop = () => {
      if (!preference.matches) return;
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      section
        .querySelector('.experience-islands')
        ?.removeAttribute('data-live');
    };
    preference.addEventListener('change', stop);
    return () => {
      media.revert();
      observer.disconnect();
      preference.removeEventListener('change', stop);
      animations.forEach((animation) => animation.cancel());
      section
        .querySelector('.experience-islands')
        ?.removeAttribute('data-live');
    };
  }, []);
  return null;
}
