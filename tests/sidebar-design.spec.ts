import { test, expect } from '@playwright/test';

for (const locale of ['es', 'en']) {
  test(`sidebar ${locale}: reserved layout, responsive navigation and keyboard`, async ({
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
      await page.goto(locale === 'es' ? '/' : '/en');
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      ).toBe(true);
      if (width > 900) {
        const rail = await page.locator('.scroll-rail').boundingBox();
        const main = await page.locator('main').boundingBox();
        expect(rail!.height).toBeLessThan(height);
        expect(rail!.y).toBeGreaterThan(0);
        expect(rail!.y + rail!.height).toBeLessThan(height);
        expect(main!.x).toBeGreaterThan(rail!.x + rail!.width);
        expect(main!.width + main!.x).toBe(width);
        expect(main!.x).toBeGreaterThanOrEqual(
          width >= 1400 ? 224 : width >= 1100 ? 208 : 184,
        );
        await expect(page.locator('main .scroll-rail')).toHaveCount(0);
        await expect(page.locator('.rail-index a')).toHaveCount(7);
      } else {
        await expect(page.locator('.scroll-rail')).toBeHidden();
        const toggle = page.locator('.mobile-menu-toggle');
        await toggle.focus();
        await page.keyboard.press('Enter');
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#landing-mobile-menu a')).toHaveCount(7);
        await page.keyboard.press('Escape');
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(toggle).toBeFocused();
        await toggle.click();
        await page.locator('#landing-mobile-menu a[href="#projects"]').click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(page.locator('#projects')).toBeFocused();
        await page.goto(locale === 'es' ? '/' : '/en');
      }
      await page.screenshot({
        path: info.outputPath(`${width}x${height}.png`),
        animations: 'disabled',
      });
    }
  });
}
