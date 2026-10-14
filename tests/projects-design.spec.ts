import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of ['es', 'en']) {
  test(
    'projects ' +
      locale +
      ': approved composition, responsive and honest actions',
    async ({ page }, info) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      for (const [width, height] of [
        [1920, 1080],
        [1440, 900],
        [1280, 800],
        [1024, 768],
        [768, 1024],
        [375, 812],
      ]) {
        await page.setViewportSize({ width, height });
        for (const standalone of [false, true]) {
          const route =
            (locale === 'en' ? '/en' : '') +
            (standalone ? '/projects' : '/#projects');
          const response = await page.goto(route);
          expect(response?.status()).toBe(200);
          const section = page.locator('#projects');
          await expect(section.locator('.project-concept')).toHaveCount(3);
          await expect(section.locator('.project-concept-status')).toHaveCount(
            3,
          );
          await expect(section.locator('.inventory-console')).toHaveCount(1);
          await expect(section.locator('.infra-scene')).toHaveCount(2);
          await expect(section.locator('.process-steps li')).toHaveCount(7);
          await expect(section.locator('.project-actions button')).toHaveCount(
            6,
          );
          for (const button of await section
            .locator('.project-actions button')
            .all())
            await expect(button).toBeDisabled();
          await expect(section.locator('a[href*="/projects/"]')).toHaveCount(0);
          const cards = await section.locator('.project-concept').all();
          const featured = await cards[0].boundingBox();
          const second = await cards[1].boundingBox();
          const third = await cards[2].boundingBox();
          expect(second!.y).toBeGreaterThanOrEqual(
            featured!.y + featured!.height,
          );
          if (width > 1100) {
            expect(second!.y).toBeCloseTo(third!.y, 0);
            expect(third!.x).toBeGreaterThan(second!.x);
          } else
            expect(third!.y).toBeGreaterThanOrEqual(second!.y + second!.height);
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth + 1,
            ),
          ).toBe(true);
          await section.evaluate((element) =>
            element.scrollIntoView({ behavior: 'instant' }),
          );
          if (width === 1440 || width === 375) {
            const result = await new AxeBuilder({ page })
              .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
              .analyze();
            expect(
              result.violations,
              JSON.stringify(result.violations),
            ).toEqual([]);
          }
          await section.screenshot({
            path: info.outputPath(
              width +
                'x' +
                height +
                (standalone ? '-index' : '-landing') +
                '.png',
            ),
            animations: 'disabled',
          });
          await page.screenshot({
            path: info.outputPath(
              width +
                'x' +
                height +
                (standalone ? '-index-frame' : '-landing-frame') +
                '.png',
            ),
            animations: 'disabled',
          });
        }
      }
      expect(errors).toEqual([]);
    },
  );
}
