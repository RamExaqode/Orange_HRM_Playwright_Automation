import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test('User can click Admin tab after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  const adminPage = new AdminPage(page);
  await adminPage.clickAdminTab();

  const tabText = await adminPage.getAdminTabText();
  console.log('Admin tab text:', tabText);

   const AddUser = new AdminPage(page);
  await adminPage.AddUsertoAdmin();

  const AddUsertabText = await adminPage.getAddUserText();
  console.log('Add User text:', AddUsertabText);

  //const UserRole = new AdminPage(page);
 //S await adminPage.UserRole();



  const EntreEmployeeName = new AdminPage(page);
  await adminPage.EntreEmployeeName();

   const Enterusername = new AdminPage(page);
  await adminPage.Enterusername();

   const Password = new AdminPage(page);
  await adminPage.Password();

   const ConfirmPassword = new AdminPage(page);
  await adminPage.ConfirmPassword();

  const SaveUser = new AdminPage(page);
  await adminPage.SaveUser();

  
});
