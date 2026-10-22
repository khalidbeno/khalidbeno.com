'use client';
import { useEffect } from 'react';

/** Progressive enhancement: server and no-JS views stay visible. */
export function RevealOnScroll() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [{ transform: 'translateY(16px)' }, { transform: 'translateY(0)' }],
            { duration: 600, easing: 'cubic-bezier(.2,.65,.3,1)' },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        '.page-hero, .project-concept, .skills-map, .notes-preview-actions',
      )
      .forEach((node) => observer.observe(node));
    const stop = () => {
      if (preference.matches)
        animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', stop);
      animations.forEach((animation) => animation.cancel());
    };
  }, []);
  return null;
}
