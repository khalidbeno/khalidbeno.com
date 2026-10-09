import { test, expect } from '@playwright/test';
import { localizedPath } from '../src/config/locales';

for (const locale of ['es', 'en'] as const) {
  test(`experience ${locale}: six sections, illustration and continuous canvas`, async ({
    page,
  }, info) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const [width, height] of [
      [1920, 1080],
      [1440, 900],
      [1280, 800],
      [1024, 768],
      [768, 1024],
      [375, 812],
    ]) {
      await page.setViewportSize({ width, height });
      await page.goto(`${localizedPath(locale)}#experience`);
      await expect(page.locator('#about, a[href*="#about"]')).toHaveCount(0);
      await expect(page.locator('.rail-index a')).toHaveCount(6);
      await expect(page.locator('.rail-number')).toHaveText([
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
      ]);
      const experience = page.locator('#experience');
      await expect(experience.locator('h2')).toContainText(
        locale === 'es' ? 'Trabajo real.' : 'Real work.',
      );
      const image = experience.locator('img.experience-illustration');
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
        )
        .toBe(true);
      const bounds = await image.boundingBox();
      expect(Math.abs(bounds!.width - bounds!.height)).toBeLessThan(1);
      await expect(experience.locator('.experience-card')).toHaveCount(4);
      await expect(experience.locator('.city-connection')).toHaveCount(0);
      await expect(page.locator('.site-backdrop')).toHaveCount(1);
      const canvas = await page.locator('.site-backdrop').boundingBox();
      const layout = await page.locator('.site-page').boundingBox();
      expect(canvas!.height).toBeCloseTo(layout!.height, 0);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      ).toBe(true);
      await experience.evaluate((element) =>
        element.scrollIntoView({ behavior: 'instant' }),
      );
      await page.screenshot({
        path: info.outputPath(`${width}x${height}.png`),
        animations: 'disabled',
      });
      await experience.screenshot({
        path: info.outputPath(`${width}-complete.png`),
        animations: 'disabled',
      });
    }
  });
}
