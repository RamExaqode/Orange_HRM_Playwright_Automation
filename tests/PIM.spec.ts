import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';
import { PIMPage } from '../pages/PIMPage'; 

test('User can click PIM tab after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  const pimPage = new PIMPage(page);
  await pimPage.clickPIMTab();

  const tabText = await pimPage.getPIMPageTitle();
  console.log('PIM Page Title text:', tabText);

  await pimPage.clickAddPIMEmployeeButton();
  const addEmployeeText = await pimPage.clickAddPIMEmployeeButton();
  console.log('Add Employee button clicked:', addEmployeeText); 

  await pimPage.enterEmployeeFirstName('Amar');
  await pimPage.enterEmployeeMiddleName('Akbar');
  await pimPage.enterEmployeeLastName('Anthony');
  console.log('Employee details entered: Amar Akbar Anthony');

});
