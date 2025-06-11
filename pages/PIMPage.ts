import { Page, Locator } from '@playwright/test';

export class PIMPage {
  private page: Page;
  private PIMTab: Locator;
  private pIMPageTitle: Locator;
  private addPIMEmployeeButton: Locator;
  private addEmployeePageTitle: Locator;
  private employeeFirstName: Locator;
  private employeeMiddleName: Locator;
  private employeeLastName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.PIMTab = page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']");
    this.pIMPageTitle = page.locator("//span[@class='oxd-topbar-header-breadcrumb']");
    this.addPIMEmployeeButton = page.locator("//div[@class='orangehrm-header-container']//button[normalize-space()='Add']");
    this.addEmployeePageTitle = page.locator("//h6[contains(text(), 'Add Employee')]");
    this.employeeFirstName = page.locator("//input[@name='firstName']");
    this.employeeMiddleName = page.locator("//input[@name='middleName']");
    this.employeeLastName = page.locator("//input[@name='lastName']");
  }

  async clickPIMTab() {
    console.log("Clicking on the PIM tab...");
    await this.PIMTab.waitFor({ state: 'visible', timeout: 5000 });
    await this.PIMTab.click();
    await this.pIMPageTitle.waitFor({ state: 'visible', timeout: 5000 });
    console.log("PIM page loaded.");
  }

  async getPIMPageTitle(): Promise<string | null> {
    return await this.pIMPageTitle.textContent();
  }

  async clickAddPIMEmployeeButton() {
    console.log("Clicking on the 'Add' button...");
    await this.addPIMEmployeeButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.addPIMEmployeeButton.click();
    await this.addEmployeePageTitle.waitFor({ state: 'visible', timeout: 5000 });
    console.log("Navigated to Add Employee form.");
  }

  async getEmployeePageTitle(): Promise<string | null> {
    return await this.addEmployeePageTitle.textContent();
  }

  async enterEmployeeFirstName(firstName: string) {
    await this.employeeFirstName.waitFor({ state: 'visible', timeout: 3000 });
    await this.employeeFirstName.fill(firstName);
  }

  async enterEmployeeMiddleName(middleName: string) {
    await this.employeeMiddleName.waitFor({ state: 'visible', timeout: 3000 });
    await this.employeeMiddleName.fill(middleName);
  }

  async enterEmployeeLastName(lastName: string) {
    await this.employeeLastName.waitFor({ state: 'visible', timeout: 3000 });
    await this.employeeLastName.fill(lastName);
  }
}
