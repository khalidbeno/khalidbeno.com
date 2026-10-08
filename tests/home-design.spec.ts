import { test, expect } from '@playwright/test';
import { localizedPath } from '../src/config/locales';

const viewports = [
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 1280, height: 800 },
  { width: 768, height: 1024 },
  { width: 375, height: 812 },
];
for (const locale of ['es', 'en'] as const) {
  test(`home craft ${locale}: copy, reserved media and actions fit the first screen`, async ({
    page,
  }, info) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      const response = await page.goto(localizedPath(locale));
      expect(response?.status()).toBe(200);
      const home = page.locator('#home');
      await expect(home.locator('h1')).toHaveText('Khaled Beno');
      await expect(home.locator('.home-media')).toHaveCount(1);
      await expect(
        home.locator('.asset, img, .portrait-placeholder, .action-note'),
      ).toHaveCount(0);
      await expect(
        home.getByRole('button', {
          name: locale === 'es' ? 'Descargar CV' : 'Download CV',
        }),
      ).toBeDisabled();
      const text = await home.innerText();
      expect(text).not.toContain(locale === 'es' ? 'pendiente' : 'pending');
      const chips = await home.locator('.disciplines').boundingBox();
      expect(chips!.y + chips!.height).toBeLessThan(viewport.height);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      ).toBe(true);
      await expect(page.locator('.scroll-rail')).toBeVisible({
        visible: viewport.width > 900,
      });
      const font = await home
        .locator('h1')
        .evaluate((element) => getComputedStyle(element).fontFamily);
      expect(font).toContain('system-ui');
      await page.screenshot({
        path: info.outputPath(`${viewport.width}x${viewport.height}.png`),
        animations: 'disabled',
      });
    }
    const projects = page.locator('#home .button--primary');
    await projects.focus();
    await expect(projects).toBeFocused();
    expect(
      await projects.evaluate(
        (element) => getComputedStyle(element).outlineStyle,
      ),
    ).not.toBe('none');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('#projects')).toBeFocused();
  });
}
