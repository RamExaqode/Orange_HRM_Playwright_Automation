import { Page, Locator } from '@playwright/test';

export class AdminPage {
  private page: Page;
  private adminTab: Locator;
  private AdminText: Locator;
  private AddUser: Locator;
  private AddUserText: Locator;
  private userRole: Locator;
  private employeeName: Locator;
  private username: Locator;
  private password: Locator;
  private confirmPassword: Locator;
  private saveUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.adminTab = page.locator("//span[text()='Admin' and contains(@class, 'oxd-main-menu-item--name')]");
    this.AdminText = page.locator("//span[@class='oxd-topbar-header-breadcrumb']");
    this.AddUser =page.locator("//div[@class='orangehrm-header-container']//button");
    this.AddUserText= page.locator("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']");
    this.userRole = page.locator("//div[@class='oxd-select-text-input']").first();
    this.employeeName = page.locator("//input[@placeholder='Type for hints...']");
    this.username= page.locator("//div[@class='oxd-form-row']//input[@class='oxd-input oxd-input--active']");
    this.password = page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters user-password-cell']//input[@type='password']");
    this.confirmPassword = page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters']//input[@type='password']");
    this.saveUser=page.locator("//button[@type='submit']");

  }

  async clickAdminTab() {
    await this.adminTab.click();
  }
  
  async getAdminTabText(): Promise<string> {
    return (await this.AdminText.textContent())?.trim() || '';
  }

   async AddUsertoAdmin() {
    await this.AddUser.click();
  }

   async getAddUserText(): Promise<string> {
    return (await this.AddUserText.textContent())?.trim() || '';
  }

  async UserRole() {
  await this.userRole.waitFor({ state: 'visible' });
  await this.userRole.click();
   
   const option = this.page.locator("//div[@role='listbox']//span[text()='Admin']");
  await option.waitFor({ state: 'visible' });
  await option.click();

}
  
   async EntreEmployeeName() {
    await this.employeeName.fill("ABC ABC ABC");
  }

   async Enterusername() {
    await this.username.fill("ram123");
  }

   async Password() {
    await this.password.fill("ram@123");
  }

   async ConfirmPassword() {
    await this.confirmPassword.fill("ram@123");
  }

  async SaveUser() {
    await this.saveUser.click();
  }
}
