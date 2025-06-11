import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

const dashboardText = await page.locator("//span[@class='oxd-topbar-header-breadcrumb']/h6[text()='Dashboard']").textContent();;
console.log('Text found:', dashboardText?.trim());

//a[@class='oxd-main-menu-item active']//span[1]
});
