import { test, expect } from '@playwright/test';

for (const locale of ['es', 'en']) {
  test(
    'experience story ' +
      locale +
      ': pin, scenes, reverse, release and fallbacks',
    async ({ page }, info) => {
      await page.emulateMedia({ reducedMotion: 'no-preference' });
      await page.addInitScript(() => {
        document.addEventListener('DOMContentLoaded', () => {
          document.documentElement.style.scrollBehavior = 'auto';
        });
      });
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      for (const [width, height] of [
        [1920, 1080],
        [1440, 900],
        [1280, 800],
        [1280, 650],
        [1366, 650],
        [1440, 700],
        [1440, 750],
        [1536, 720],
        [1920, 800],
        [1440, 600],
        [1024, 768],
        [768, 1024],
        [375, 812],
      ]) {
        await page.setViewportSize({ width, height });
        await page.goto((locale === 'es' ? '/' : '/en') + '#experience');
        const section = page.locator('#experience');
        const stage = page.locator('.experience-stage');
        if (width > 1100 && height >= 650) {
          await expect(section).toHaveAttribute('data-story', 'true');
          await page.evaluate(() => document.fonts.ready);
          await expect
            .poll(() =>
              page
                .locator('.experience-illustration')
                .evaluate(
                  (img: HTMLImageElement) =>
                    img.complete && img.naturalWidth > 0,
                ),
            )
            .toBe(true);
          await page.evaluate(
            () =>
              new Promise<void>((resolve) =>
                requestAnimationFrame(() =>
                  requestAnimationFrame(() => resolve()),
                ),
              ),
          );
          await expect
            .poll(() =>
              section.evaluate((e) => {
                const start = Number((e as HTMLElement).dataset.storyStart);
                const end = Number((e as HTMLElement).dataset.storyEnd);
                const top = e.getBoundingClientRect().top + scrollY;
                const travel = Number.parseFloat(
                  (e as HTMLElement).style.getPropertyValue('--story-travel'),
                );
                return (
                  Math.abs(start - (top - 76)) < 1 &&
                  Math.abs(end - start - travel) < 1
                );
              }),
            )
            .toBe(true);
          const geometry = await section.evaluate((e) => ({
            top: Number((e as HTMLElement).dataset.storyStart) + 76,
            travel:
              Number((e as HTMLElement).dataset.storyEnd) -
              Number((e as HTMLElement).dataset.storyStart),
          }));
          for (const [progress, scene] of [
            [0.05, 0],
            [0.22, 1],
            [0.35, 2],
            [0.5, 3],
            [0.68, 4],
            [0.83, 5],
            [0.5, 3],
            [0.22, 1],
          ]) {
            await page.evaluate(
              ({ y }) => scrollTo({ top: y, behavior: 'instant' }),
              { y: geometry.top - 76 + geometry.travel * progress },
            );
            await expect(section).toHaveAttribute('data-scene', String(scene));
            await expect(
              page.locator('.rail-index a[href="#experience"]'),
            ).toHaveAttribute('aria-current', 'location');
            const intro = await page.locator('.experience-intro').boundingBox();
            expect(intro!.y + intro!.height).toBeLessThanOrEqual(height + 1);
            const box = await stage.boundingBox();
            expect(box!.y).toBeCloseTo(76, 0);
            if (scene === 1 || scene === 3 || scene === 4 || scene === 5) {
              const card = page.locator(
                '.timeline-entry[data-active="true"] .experience-card',
              );
              const bounds = await card.boundingBox();
              expect(bounds!.y).toBeGreaterThanOrEqual(75);
              expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(
                height + 1,
              );
            }
            await page.screenshot({
              path: info.outputPath(
                width + 'x' + height + '-scene-' + scene + '.png',
              ),
              animations: 'disabled',
            });
          }
          await page.evaluate(
            (y) => scrollTo({ top: y, behavior: 'instant' }),
            geometry.top - 76 + geometry.travel + height * 0.8,
          );
          await expect(
            page.locator('.rail-index a[href="#projects"]'),
          ).toHaveAttribute('aria-current', 'location');
          expect((await stage.boundingBox())!.y).toBeLessThan(76);
          await page.screenshot({
            path: info.outputPath(width + 'x' + height + '-release.png'),
            animations: 'disabled',
          });
          await page.emulateMedia({ reducedMotion: 'reduce' });
          await expect(section).not.toHaveAttribute('data-story', 'true');
          await expect(stage).toHaveCSS('position', 'static');
          await page.emulateMedia({ reducedMotion: 'no-preference' });
        } else {
          await expect(section).not.toHaveAttribute('data-story', 'true');
          await expect(stage).toHaveCSS('position', 'static');
          await section.screenshot({
            path: info.outputPath(width + 'x' + height + '-flow.png'),
            animations: 'disabled',
          });
        }
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
        ).toBe(true);
      }
      expect(errors).toEqual([]);
    },
  );
}
