import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
});
await fs.mkdir('test-results/redesign', { recursive: true });
const report = [];
for (const locale of ['es', 'en']) {
  for (const [width, height] of [
    [1920, 1080],
    [1440, 900],
    [1280, 800],
    [1024, 768],
    [768, 1024],
    [375, 812],
    [320, 740],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto('http://localhost:3195' + (locale === 'en' ? '/en' : '/'));
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.home-portrait').evaluate((image) => image.decode());
    await page.screenshot({
      path: `test-results/redesign/${locale}-${width}-home.png`,
    });
    const overflow = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      elements: [...document.querySelectorAll('main *')]
        .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
        .slice(0, 8)
        .map((e) => e.className),
    }));
    report.push({ locale, width, ...overflow });
    if (width === 1440 || width === 375) {
      for (const id of ['experience', 'projects', 'labs', 'contact', 'notes']) {
        await page
          .locator('#' + id)
          .evaluate((e) => e.scrollIntoView({ behavior: 'instant' }));
        await page
          .locator('#' + id + ' img')
          .evaluateAll((images) =>
            Promise.all(images.map((image) => image.decode())),
          );
        await page.evaluate(
          () =>
            new Promise((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(resolve)),
            ),
        );
        await page.screenshot({
          path: `test-results/redesign/${locale}-${width}-${id}.png`,
        });
        await page.locator('#' + id).screenshot({
          path: `test-results/redesign/${locale}-${width}-${id}-complete.png`,
        });
      }
    }
  }
}
await fs.writeFile(
  'test-results/redesign/layout.json',
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report));
await browser.close();
