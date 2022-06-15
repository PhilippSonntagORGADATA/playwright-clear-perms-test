import { test } from '@playwright/test';

test.describe('Camera access', () => {
  test('Camera stream should be stopped when permissions are cleared', async ({ page, context }) => {
    await page.goto('https://cozmo.github.io/jsQR/');

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Clearing permissions...");
    await context.clearPermissions();
    console.log("Permissions should be cleared by now.");
    await new Promise(resolve => setTimeout(resolve, 3000));
    await page.pause();
  });
});