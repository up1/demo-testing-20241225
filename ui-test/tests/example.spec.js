// @ts-check
const { test, expect } = require('@playwright/test');

test('Cature first page', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');

  await page.waitForSelector('[data-testid="hello_text"]');
  const hello_text = await page.getByTestId('hello_text').textContent();
  expect(hello_text).toBe('Hello World!');
  
  await expect(page).toHaveScreenshot();
});

