package TestRunner.loginSteps;

import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import ObjectRepository.LoginObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class App360_create_user extends SetupClass {
	public static String LNtest;
	public static String Email_Address;
	public static WebElement webelement;
	PerformAction action = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions act = new Actions(driver);
	Random rad = new Random();
	String name = "" + rad.nextInt(10000) + "";

	// After login see logout button
	@And("^After login see the logout button\\.$")
	public void see_the_logout_button() {
		try {
			webelement = driver.findElement(LoginObject.User_image);
			webelement.click();
			action.implictywait(driver);
			// See the logout button
			webelement = driver.findElement(LoginObject.logout);
			js.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;');",
					webelement);
			Thread.sleep(1000);
			driver.findElement(LoginObject.User_image).click();
		} catch (Exception e) {

		}
	}

	// Click on setting option is displayed on top
	@Then("^Click Settings from the top nav on app site after login\\.$")
	public void click_Settings_from_the_top_nav_on_App_site_after_login() {
		try {
			webelement = driver.findElement(LoginObject.setting);
			webelement.click();
			action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	// click on User option
	@Then("^Click Users button\\.$")
	public void click_Users_button() throws InterruptedException {
		driver.findElement(LoginObject.user).click();
		 action.implictywait(driver);
		Thread.sleep(1000);

	}

	// click on new user
	@Then("^Click the New User button\\.$")
	public void click_the_New_User_button() {
		driver.findElement(LoginObject.new_user).click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {

		}

	}

	// Select the role from drop down
	@Then("^Click on role drop down option and select consultant$")
	public void click_on_role_drop_down_option_and_select_consultant() {
		try {
			webelement = driver.findElement(LoginObject.role);
			Thread.sleep(1000);
			webelement.click();
			webelement = driver.findElement(LoginObject.chekbox);
			driver.findElement(LoginObject.chekbox).click();
			if (!driver.findElement(LoginObject.chekbox).isSelected())
			// to check the check box is already selected or not
			{
				driver.findElement(LoginObject.chekbox).click();

			}
			webelement = driver.findElement(LoginObject.role);
			 action.implictywait(driver);
			webelement.click();

		} catch (Exception e) {

		}
	}

	// Select Active Status
	@Then("^Click on Status filed and select Active$")
	public void click_on_Status_filed_and_select_Active() {
		try {
			webelement = driver.findElement(LoginObject.active);
			act.click(webelement).build().perform();
			action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	// Enter the Login name is already created
	@Then("^Enter login name as \"([^\"]*)\"\\.$")

	public void enter_login_name(String loginname) throws InterruptedException {
		driver.findElement(LoginObject.Login_Name).clear();
		 action.implictywait(driver);
		LNtest = name + loginname;
		driver.findElement(LoginObject.Login_Name).sendKeys(LNtest);
		 action.implictywait(driver);
	}

	// Enter the new login name
	@Then("^Enter login \"([^\"]*)\"\\.$")
	public void enter_exiting_login_name(String exitnname) throws InterruptedException {
		driver.findElement(LoginObject.Login_Name).clear();
		 action.implictywait(driver);
		driver.findElement(LoginObject.Login_Name).sendKeys(exitnname);

	}

	// Enter the First name
	@Then("^Enter first name as \"([^\"]*)\"\\.$")
	public void enter_first_name(String FN) {
		// System.out.println(LNtest);
		try {
			driver.findElement(LoginObject.F_Name).clear();
			 action.implictywait(driver);
			driver.findElement(LoginObject.F_Name).sendKeys(FN);
			 action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	// Enter Last name
	@Then("^Enter last name as \"([^\"]*)\"\\.$")
	public void enter_last_name(String LN) {
		try {
			driver.findElement(LoginObject.L_Name).clear();
			 action.implictywait(driver);
			driver.findElement(LoginObject.L_Name).sendKeys(LN);
			 action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	// Enter email name
	@Then("^Enter email as \"([^\"]*)\"\\.$")
	public void user_email_address(String Email) {
		try {
			driver.findElement(LoginObject.Email).clear();
			 action.implictywait(driver);
			driver.findElement(LoginObject.Email).sendKeys(Email);
			 action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	// enter password
	@Then("^Enter password as \"([^\"]*)\"\\.$")
	public void enter_user_password(String pswd) {
		try {
			driver.findElement(LoginObject.pass_set).clear();
			 action.implictywait(driver);
			driver.findElement(LoginObject.pass_set).sendKeys(pswd);
			 action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	// Enter Confirm password
	@Then("^Enter confirm password as \"([^\"]*)\"\\.$")
	public void enter_user_confirm_password(String Cpswd) {
		try {
			driver.findElement(LoginObject.pass_conf).clear();
			 action.implictywait(driver);
			driver.findElement(LoginObject.pass_conf).sendKeys(Cpswd);
			action.implictywait(driver);

		} catch (Exception e) {

		}
	}

	// Click on confirm button
	@Then("^Click on confirm button\\.$")
	public void click_on_confirm_button() throws InterruptedException {

		try {
			js.executeScript("window.scrollBy(0,300)");
			Thread.sleep(1000);
			webelement = driver.findElement(LoginObject.confirm);
			js.executeScript("arguments[0].click();", webelement);
			Thread.sleep(3000);
		} catch (Exception e) {

		}
	}

	// Check the validation message for Login name field
	@Then("^Verify \"([^\"]*)\" for the validation message of Login name\\.$")
	public void verify_for_the_validation_message_of_Login_name(String LogName) throws InterruptedException {
		String LN_message = driver.findElement(LoginObject.L_Namevalidation).getText();
		Thread.sleep(1000);
		Assert.assertEquals(LN_message, LogName);
		System.out.println(LN_message.equals(LogName));
		
	}

	// Check the validation message for Email.
	@Then("^Verify \"([^\"]*)\" for the validation message of the email address field\\.$")
	public void verify_for_the_validation_message_of_the_email_address_field(String emailfiled) throws Throwable {
		String Email_message = driver.findElement(LoginObject.Email_addressvalidation).getText();
		action.implictywait(driver);
		Assert.assertEquals(Email_message, emailfiled);
		 action.implictywait(driver);
		Assert.assertTrue(Email_message.equals(emailfiled));
		 action.implictywait(driver);
	}

	// Check the validation message for password.
	@Then("^Verify  \"([^\"]*)\" for the validation message of the password field\\.$")
	public void verify_for_the_validation_message_of_the_password_field(String arg1) throws Throwable {
		try {
			String tr1 = driver.findElement(LoginObject.password_valid).getText();
			 action.implictywait(driver);
			// String text1 = webelement.getText();
			Assert.assertTrue(tr1.contains(arg1));
			System.out.println(tr1);
		} catch (Exception e) {

		}
	}
	// Check the validation message for Confirm password.

	@Then("^Verify  \"([^\"]*)\" for the validation message of confirm password field\\.$")
	public void verify_for_the_validation_message_of_confirm_password_field(String arg1) throws Throwable {
		try {
			String tr1 = driver.findElement(LoginObject.Confirm_password_valid).getText();
			 action.implictywait(driver);
			// String text1 = webelement.getText();
			Assert.assertTrue(tr1.contains(arg1));
			System.out.println(tr1);
		} catch (Exception e) {

		}
	}

	// Verify the Error message for Login name is already taken
	@Then("^Verify \"([^\"]*)\" for the validation message for the already taken Login name\\.$")
	public void verify_for_the_validation_message_for_the_already_taken_Login_name(String LoginName) {
		try {
			String LN_error_message = driver.findElement(LoginObject.alreadyexistsmsg).getText();
			action.implictywait(driver);
			Assert.assertTrue(LN_error_message.contains(LoginName));
			action.implictywait(driver);

		} catch (Exception e) {

		}

	}

	// Verify the Error message for Email address is already registered.
	@Then("^Verify \"([^\"]*)\" for the validation message for the this email address is already registered\\.$")
	public void verify_for_the_validation_message_for_the_this_email_address_is_already_registered(
			String emailmessage) {
		try {
			String Email_error = driver.findElement(LoginObject.alreadyexistsmsg).getText();
			action.implictywait(driver);
			Assert.assertTrue(Email_error.contains(emailmessage));
			action.implictywait(driver);
		} catch (Exception e) {

		}

	}

	// Verify the Error message when Email address and Login name is already Taken.
	@Then("^Create \"([^\"]*)\"for the error meeage for validation$")
	public void create_for_the_error_meeage_for_validation(String create) {
		try {
			String Error_Message_for_email_Lname = driver.findElement(LoginObject.alreadyexistsmsg).getText();
			action.implictywait(driver);
			Assert.assertTrue(Error_Message_for_email_Lname.contains(create));
			action.implictywait(driver);
		} catch (Exception e) {
		}
	}

	// Verify the successfully message
	@Given("^See the user added successfully message\\.$")
	public void see_the_user_added_successfully_message() {
		try {
			String st = driver.findElement(LoginObject.alert_meesage).getText();
			int i = st.indexOf("(");
			String q = st.substring(0, i + 1) + ")";
			action.implictywait(driver);
			String expectedMessage1 = "Successfully created User ()";
			Assert.assertTrue(q.contains(expectedMessage1));
			System.out.println(q.contains(expectedMessage1));
			Thread.sleep(2000);
		} catch (Exception e) {

		}
	}

	// Enter new email address
	@Then("^Enter Enter email test \"([^\"]*)\"\\.$")
	public void enter_Enter_email_test(String LoginName) {
		try {
			driver.findElement(LoginObject.Email).clear();

			Email_Address = name + LoginName;
			Thread.sleep(1000);
			driver.findElement(LoginObject.Email).sendKeys(Email_Address);

		} catch (Exception e) {

		}
	}

	// Search the user Login name
	@And("^Search the created user with Login name\\.$")
	public void search_the_created_user_with_Login_name() throws Throwable {
		webelement = driver.findElement(LoginObject.Serch_box);
		 action.implictywait(driver);
		webelement.sendKeys(LNtest);
		Thread.sleep(1000);
	}

	// Click on user edit profile
	@And("^Compare the added user email with seach result\\.$")
	public void compare_the_added_user_email_with_seach_result() throws Exception {
		List<WebElement> row = driver.findElement(By.cssSelector("#page-wrap>div > div > div:nth-child(4) > table > tbody")).findElements(By.tagName("tr"));
		 int totalrows = row.size();                               
		 System.out.println("total rows "+totalrows);
		 for (int i=totalrows;i<=totalrows;i++) {
			 WebElement etn=driver.findElement(By.cssSelector("#page-wrap>div>div>div:nth-child(4)>table>tbody>tr:nth-child("+i+")>td:last-child>div"));
			 WebElement edit=driver.findElement(By.cssSelector("#page-wrap>div>div>div:nth-child(4)>table>tbody>tr:nth-child("+i+")>td:last-child>div>ul>li:nth-child(1)"));
			 
			 if (etn.equals(etn)) {
				    etn.click();
				    Thread.sleep(1000);
				    edit.click();	
				    Thread.sleep(1000);
				    break;
			 }
			   
	}
	}
	// verify the created user Login name
	@And("^Check the user created Login name\\.$")
	public void check_the_user_created_Login_name() throws Throwable {

		String logName = "body>div.modal.fade.general-modal.in>div>div>div>div>div>div.modal-body>div>form>div:nth-child(6)>div>input";
		webelement = driver.findElement(By.cssSelector(logName));
		// webelement.click();
		String getname = driver.findElement(By.cssSelector(logName)).getAttribute("value");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		// String LnTtext = LNT.getAttribute(LNtest);
		System.out.println(getname);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		Assert.assertEquals(true, webelement.isDisplayed());
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		Thread.sleep(1000);
	}

	// verify the created user Email address.
	@And("^Check the user registered email\\.$")
	public void check_the_user_registered_email() throws Throwable {

		WebElement web = driver.findElement(LoginObject.Email);
		Thread.sleep(1000);
		String Email_Check = driver.findElement(LoginObject.Email).getAttribute("value");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		System.out.println(Email_Check);
		Assert.assertEquals(true, web.isDisplayed());
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

}
