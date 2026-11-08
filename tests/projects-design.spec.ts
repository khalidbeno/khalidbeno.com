import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of ['es', 'en'] as const) {
  test(`projects ${locale}: real documentation links, responsive and accessible`, async ({ page }, info) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    for (const [width, height] of [
      [1920, 1080], [1440, 900], [1280, 800],
      [1024, 768], [768, 1024], [375, 812],
    ]) {
      await page.setViewportSize({ width, height });
      for (const standalone of [false, true]) {
        const prefix = locale === 'en' ? '/en' : '';
        const response = await page.goto(prefix + (standalone ? '/projects' : '/#projects'));
        expect(response?.status()).toBe(200);
        const section = page.locator('#projects');
        await expect(section.locator('.project-card')).toHaveCount(3);
        await expect(section.locator('.project-card-phase')).toHaveCount(3);
        await expect(section.locator('.project-card-actions a')).toHaveCount(3);
        await expect(section.locator('.process-steps li')).toHaveCount(7);
        for (const slug of ['ai-office', 'sentinel-blue-team', 'netops-ai']) {
          await expect(section.locator(`a[href="${prefix}/projects/${slug}"]`)).toHaveCount(1);
        }
        const images = section.locator('.project-card img');
        await expect(images).toHaveCount(3);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
        if (width === 1440 || width === 375) {
          const result = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
          expect(result.violations, JSON.stringify(result.violations)).toEqual([]);
        }
        await section.screenshot({
          path: info.outputPath(`${width}x${height}-${standalone ? 'index' : 'landing'}.png`),
          animations: 'disabled',
        });
      }
    }
    expect(errors).toEqual([]);
  });

  test(`projects ${locale}: explanatory pages and honest phases`, async ({ page }) => {
    const prefix = locale === 'en' ? '/en' : '';
    for (const slug of ['ai-office', 'sentinel-blue-team', 'netops-ai']) {
      const response = await page.goto(`${prefix}/projects/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('.project-detail-phase')).toBeVisible();
      await expect(page.locator('.project-detail-image img')).toHaveCount(1);
      await expect(page.locator('.project-diagram-note')).toBeVisible();
      await expect(page.locator('.detail-body section')).toHaveCount(5);
    }
  });
}
