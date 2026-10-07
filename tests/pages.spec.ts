import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { routes } from '../src/config/routes';
import { localizedPath } from '../src/config/locales';

const widths = [320, 375, 768, 1024, 1280, 1440, 1920, 2560];

for (const route of routes) {
  for (const locale of ['es', 'en'] as const) {
    test(`${route.key} ${locale}: responsive, semantics and accessibility`, async ({
      page,
    }, testInfo) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      for (const width of widths) {
        await page.setViewportSize({ width, height: 1000 });
        const response = await page.goto(localizedPath(locale, route.path));
        expect(response?.status()).toBe(200);
        await expect(page.locator('html')).toHaveAttribute('lang', locale);
        await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
        await expect(page.getByRole('main')).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
          `Horizontal overflow at ${width}px on ${locale} ${route.path}`,
        ).toBe(true);
        if (width === 375 || width === 1440) {
          const result = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
            .analyze();
          expect(
            result.violations,
            JSON.stringify(result.violations, null, 2),
          ).toEqual([]);
          await page.screenshot({
            path: testInfo.outputPath(`${width}.png`),
            fullPage: true,
            animations: 'disabled',
          });
        }
      }
      expect(errors).toEqual([]);
    });
  }
}
