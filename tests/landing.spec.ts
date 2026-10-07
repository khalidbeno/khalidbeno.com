import { test, expect } from '@playwright/test';
import { sections, sectionKeys } from '../src/config/sections';
import { localizedPath } from '../src/config/locales';

for (const locale of ['es', 'en'] as const) {
  test(`continuous landing ${locale}: rail, anchors, active state, progress and languages`, async ({
    page,
  }, info) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 1000 });
    const path = localizedPath(locale);
    await page.goto(path);
    await expect(page.locator('header')).toHaveCount(1);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('footer')).toHaveCount(1);
    expect(
      await page
        .locator('main > section')
        .evaluateAll((items) => items.map((item) => item.id)),
    ).toEqual(sectionKeys);
    await expect(page.locator('.scroll-rail')).toBeVisible();
    await expect(page.locator('.landing-header .desktop-nav')).toBeHidden();
    for (const section of sections) {
      const target = page.locator(`#${section.key}`);
      await page.locator(`.rail-index a[href="#${section.key}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${section.key}$`));
      await expect(
        page.locator('.rail-index [aria-current="location"]'),
      ).toHaveAttribute('href', `#${section.key}`);
      await expect(target).toBeFocused();
      const bounds = await target.boundingBox();
      const rail = await page.locator('.scroll-rail').boundingBox();
      expect(bounds!.x).toBeGreaterThanOrEqual(rail!.x + rail!.width);
      expect(bounds!.y).toBeGreaterThanOrEqual(70);
      expect(bounds!.y).toBeLessThan(110);
      await page.screenshot({
        path: info.outputPath(`desktop-${section.key}.png`),
        animations: 'disabled',
      });
      await expect(page.locator('.language-switcher a')).toHaveAttribute(
        'href',
        `${localizedPath(locale === 'es' ? 'en' : 'es')}#${section.key}`,
      );
    }
    await page.evaluate(() =>
      scrollTo(0, document.documentElement.scrollHeight),
    );
    await expect
      .poll(() =>
        page
          .locator('.scroll-rail')
          .evaluate((element) =>
            Number(
              getComputedStyle(element).getPropertyValue('--scroll-progress'),
            ),
          ),
      )
      .toBeGreaterThan(0.99);
    await page.evaluate(() => scrollTo(0, 0));
    await expect(
      page.locator('.rail-index [aria-current="location"]'),
    ).toHaveAttribute('href', '#home');
    await expect
      .poll(() =>
        page
          .locator('.scroll-rail')
          .evaluate((element) =>
            Number(
              getComputedStyle(element).getPropertyValue('--scroll-progress'),
            ),
          ),
      )
      .toBeLessThan(0.01);
    await page.locator('.rail-index a[href="#experience"]').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#experience')).toBeFocused();
    await page.locator('.language-switcher a').click();
    await expect(page.locator('html')).toHaveAttribute(
      'lang',
      locale === 'es' ? 'en' : 'es',
    );
    await expect(page).toHaveURL(/#experience$/);
    await page.goto(`${path}#labs`);
    await expect(
      page.locator('.rail-index [aria-current="location"]'),
    ).toHaveAttribute('href', '#labs');
    await page.screenshot({
      path: info.outputPath('desktop-labs.png'),
      animations: 'disabled',
    });
    await page.setViewportSize({ width: 375, height: 900 });
    await expect(page.locator('.scroll-rail')).toBeHidden();
    await expect(page.locator('.mobile-navigation summary')).toBeVisible();
    await page.locator('.mobile-navigation summary').click();
    await page.locator('.mobile-navigation a[href="#contact"]').click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('.mobile-navigation')).not.toHaveAttribute(
      'open',
      '',
    );
    await expect(page.locator('#contact')).toBeFocused();
    await expect(
      page.locator('.mobile-navigation a[aria-current="location"]'),
    ).toHaveAttribute('href', '#contact');
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
    expect(
      await page
        .locator('html')
        .evaluate((element) => getComputedStyle(element).scrollBehavior),
    ).toBe('auto');
    await page.screenshot({
      path: info.outputPath('mobile-contact.png'),
      animations: 'disabled',
    });
    for (const section of sections) {
      await page
        .locator(`#${section.key}`)
        .evaluate((element) => element.scrollIntoView());
      await page.screenshot({
        path: info.outputPath(`mobile-${section.key}.png`),
        animations: 'disabled',
      });
    }
  });

  test(`legacy redirects ${locale}: sections replace duplicate pages`, async ({
    request,
  }) => {
    for (const key of ['about', 'experience', 'labs', 'contact']) {
      const response = await request.get(localizedPath(locale, `/${key}`), {
        maxRedirects: 0,
      });
      expect(response.status()).toBe(308);
      expect(response.headers().location).toBe(
        `${localizedPath(locale)}#${key}`,
      );
    }
  });
}

test('native smooth scrolling and manual scroll update active section without changing the URL', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto('/');
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('smooth');
  await page.locator('.rail-index a[href="#projects"]').click();
  await expect(
    page.locator('.rail-index [aria-current="location"]'),
  ).toHaveAttribute('href', '#projects');
  await page
    .locator('#contact')
    .evaluate((element) => element.scrollIntoView({ behavior: 'instant' }));
  await expect(
    page.locator('.rail-index [aria-current="location"]'),
  ).toHaveAttribute('href', '#contact');
  await expect(page).toHaveURL(/#projects$/);
});
