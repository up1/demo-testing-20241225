// @ts-check
import { test, expect } from '@playwright/test';

test('Login success', async ({ page }) => {
  await page.goto('https://demo-login-workshop.vercel.app/');
  await page.locator('[data-test="username_field"]').click();
  await page.locator('[data-test="username_field"]').fill('demo');
  await page.locator('[data-test="password_field"]').click();
  await page.locator('[data-test="password_field"]').fill('modeffffffffff');
  await page.locator('[data-test="login_button"]').click();
  await page.locator('[data-test="page_name"]').click();
  await page.locator('[data-test="result"]').click();
});