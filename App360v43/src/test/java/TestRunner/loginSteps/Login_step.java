package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;

import ObjectRepository.LoginObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
public class Login_step extends SetupClass{
	@Given("^navigates to website url\\.$")
	public void navigates_to_website_url() {
		try {
			// Maximize Windows
			driver.get(baseURL);
			Thread.sleep(2000);
			log.info("It's opening the website URL");
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		} catch (Exception e) {

		}
	}

	// Enter the username
	@Then("^Enter user name as \"([^\"]*)\"\\.$")
	public void user_name(String email) {

		driver.findElement(LoginObject.username).sendKeys(email);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	// Enter password
	@Then("^Enter user password as \"([^\"]*)\"\\.$")
	public void enter_password(String email) {

		driver.findElement(LoginObject.password).sendKeys(email);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	// click on login button
	@Then("^click on sign in button\\.$")
	public void click_on_sign_in_button() {
			driver.findElement(LoginObject.login).click();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}


}
