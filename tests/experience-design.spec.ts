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
      const intro = await experience.locator('.experience-intro').boundingBox();
      const timeline = await experience
        .locator('.experience-timeline')
        .boundingBox();
      const cards = await experience.locator('.experience-card').all();
      if (width > 1100) {
        expect(Math.abs(intro!.y - timeline!.y)).toBeLessThan(1);
        expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(timeline!.x);
        for (const card of cards) {
          const cardBounds = await card.boundingBox();
          expect(cardBounds!.x).toBeGreaterThanOrEqual(timeline!.x);
        }
      } else {
        expect(timeline!.y).toBeGreaterThanOrEqual(bounds!.y + bounds!.height);
      }
      await expect(experience.locator('.experience-card')).toHaveCount(4);
      await expect(experience.locator('.island-label-dublin')).toContainText(
        locale === 'es' ? 'Dublín' : 'Dublin',
      );
      await expect(experience.locator('.island-label-madrid')).toContainText(
        'Madrid',
      );
      for (const label of await experience.locator('.island-label').all()) {
        const labelBounds = await label.boundingBox();
        expect(labelBounds!.x).toBeGreaterThanOrEqual(bounds!.x);
        expect(labelBounds!.x + labelBounds!.width).toBeLessThanOrEqual(
          bounds!.x + bounds!.width + 1,
        );
      }
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

test('experience motion respects preference changes and no-JavaScript content', async ({
  page,
  browser,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/#experience');
  const scene = page.locator('.experience-islands');
  await scene.scrollIntoViewIfNeeded();
  await expect(page.locator('#experience')).toHaveAttribute(
    'data-story',
    'true',
  );
  await expect(page.locator('.experience-stage')).toHaveCSS(
    'position',
    'sticky',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('#experience')).not.toHaveAttribute(
    'data-story',
    'true',
  );
  await expect
    .poll(() =>
      scene.evaluate(
        (element) => element.getAnimations({ subtree: true }).length,
      ),
    )
    .toBe(0);
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  try {
    const staticPage = await context.newPage();
    await staticPage.goto('/#experience');
    await expect(staticPage.locator('.island-label-dublin')).toBeVisible();
    await expect(staticPage.locator('.experience-card')).toHaveCount(4);
    for (const card of await staticPage.locator('.experience-card').all())
      await expect(card).toBeVisible();
  } finally {
    await context.close();
  }
});
