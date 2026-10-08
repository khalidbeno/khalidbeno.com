import { test, expect } from '@playwright/test';
import { indexRoutes as routes } from '../src/config/sections';
import { localizedPath } from '../src/config/locales';

for (const locale of ['es', 'en'] as const) {
  test(`navigation ${locale}: all internal links resolve and languages preserve the view`, async ({
    page,
    request,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    for (const route of routes) {
      await page.goto(localizedPath(locale, route.path));
      const other = locale === 'es' ? 'en' : 'es';
      await expect(page.locator('.language-switcher a')).toHaveAttribute(
        'href',
        route.key === 'home'
          ? `${localizedPath(other)}#home`
          : localizedPath(other, route.path),
      );
      const paths = await page
        .locator('a[href^="/"]')
        .evaluateAll((links) => [
          ...new Set(links.map((link) => link.getAttribute('href')!)),
        ]);
      for (const path of paths)
        expect((await request.get(path)).status(), path).toBe(200);
      await expect(page.locator('a[href="#"]')).toHaveCount(0);
    }
  });

  test(`keyboard ${locale}: skip link, focus and mobile disclosure work`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto(localizedPath(locale));
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
    expect(
      await page
        .locator('.skip-link')
        .evaluate((element) => getComputedStyle(element).outlineStyle),
    ).not.toBe('none');
    await page.keyboard.press('Enter');
    await expect(page.getByRole('main')).toBeFocused();
    const summary = page.locator('.mobile-menu-toggle');
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(summary).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.mobile-navigation nav')).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(
      page.locator('.mobile-navigation nav a').first(),
    ).toBeFocused();
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(summary).toHaveAttribute('aria-expanded', 'false');
    await page
      .getByRole('link', {
        name: locale === 'es' ? 'Switch to English' : 'Cambiar a español',
      })
      .click();
    await expect(page.locator('html')).toHaveAttribute(
      'lang',
      locale === 'es' ? 'en' : 'es',
    );
  });

  test(`notes ${locale}: search, filters and reset work without client state`, async ({
    page,
  }) => {
    await page.goto(localizedPath(locale, '/notes'));
    const search = page.getByRole('searchbox');
    await search.fill('linux');
    await search.press('Enter');
    await expect(page).toHaveURL(/q=linux/);
    await expect(search).toHaveValue('linux');
    await page
      .locator('.note-filters')
      .getByRole('link', { name: 'Cloud', exact: true })
      .click();
    await expect(page).toHaveURL(/tag=Cloud/);
    await expect(page).toHaveURL(/q=linux/);
    await expect(
      page.locator('.note-filters [aria-current="true"]'),
    ).toHaveText('Cloud');
    await page.locator('.reset-filters').click();
    await expect(page).toHaveURL(
      new RegExp(`${localizedPath(locale, '/notes')}$`),
    );
    await expect(search).toHaveValue('');
  });

  test(`content safety ${locale}: missing details are 404 and no unapproved contact is exposed`, async ({
    request,
    page,
  }) => {
    for (const type of ['projects', 'notes']) {
      for (const slug of [
        'not-published',
        'draft',
        'inventory-integrations-platform',
      ]) {
        const response = await request.get(
          localizedPath(locale, `/${type}/${slug}`),
        );
        expect(response.status()).toBe(404);
        expect(await response.text()).toContain('noindex');
      }
    }
    await page.goto(localizedPath(locale, '/contact'));
    await expect(
      page.locator('a[href^="mailto:"], a[href^="tel:"]'),
    ).toHaveCount(0);
    await expect(
      page.locator('#contact').getByRole('button', {
        name: locale === 'es' ? 'Descargar CV' : 'Download CV',
      }),
    ).toBeDisabled();
    expect(await page.content()).not.toContain('khaledbeno922@gmail.com');
    expect(await page.content()).not.toContain('674 085 607');
  });
}

test('runtime SEO is honest without a configured domain', async ({
  request,
  page,
}) => {
  for (const path of ['/', '/experience', '/en', '/en/experience', '/notes']) {
    await page.goto(path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      /noindex/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary',
    );
  }
  expect(await (await request.get('/robots.txt')).text()).toContain(
    'Disallow: /',
  );
  expect(await (await request.get('/sitemap.xml')).text()).not.toContain(
    '<loc>',
  );
  expect((await request.get('/images/01-home.png')).status()).toBe(404);
  expect(
    (await request.get('/docs/design/reference-images/01-home.png')).status(),
  ).toBe(404);
});

test('reduced motion and no-JavaScript preserve content and navigation', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: 'reduce',
    viewport: { width: 375, height: 900 },
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3187/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Khaled Beno',
  );
  await page.locator('.mobile-navigation summary').click();
  await page
    .locator('.mobile-navigation nav')
    .getByRole('link', { name: 'Experiencia' })
    .click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator('#experience .hero-heading')).toHaveText(
    'Trabajo real. Problemas reales.',
  );
  await page.goto('http://localhost:3187/notes');
  await page.getByRole('searchbox').fill('systems');
  await page.getByRole('searchbox').press('Enter');
  await expect(page).toHaveURL(/q=systems/);
  await context.close();
});
