package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login_FirefoxBrowser {
	public static WebDriver dri;
	
	@Given("^navigates to integration-www-sandman.mobiusbookingengine.com$")
	public void navigate_website_url_test() {
		try {
			System.out.println("Firefox browser test Environment");
			System.setProperty("webdriver.gecko.driver", "F:\\Driver of All\\geckodriver.exe");
			dri=new FirefoxDriver();
			Thread.sleep(1000);
					dri.get("http://integration-www-sandman.mobiusbookingengine.com");
					dri.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}catch(Exception e) {
		}
		}

	@Then("^he/she click on login CTA\\.$")
	public void he_she_click_on_login_CTA() throws Throwable {

			dri.findElement(By.cssSelector(".ks-btn")).click();
			dri.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		    
		}

	@Then("^he/she provides the userEmail as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_userEmail_as(String email)  {
			dri.findElement(By.name("email")).sendKeys(email);
			dri.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}

	
	@Then("^he/she provides the password \"([^\"]*)\"\\.$")
	public void he_she_pass_the_app(String pass) {
		try {
		WebElement 	webelement = dri.findElement(By.name("password"));
			webelement.sendKeys(pass);
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	@Then("^he/she minimize the booking banner\\.$")
	public void he_she_minimize_the_booking_banner() {
		try {
			dri.findElement( By
					.cssSelector(".floating-bar--tab-booking.main-mobile-toggle.is-active.mobile-is-open>a")).click();
			Thread.sleep(2000);
		} catch (Exception e) {
		}
	}

	@Then("^he/she click on login cta\\.$")
	public void he_she_click_on_login() throws InterruptedException {

			WebElement web = dri.findElement(By.cssSelector(".init-button"));
			Thread.sleep(1000);
			JavascriptExecutor jse = (JavascriptExecutor) dri;
			jse.executeScript("arguments[0].click();", web);
			WebDriverWait wait = new WebDriverWait(dri, 15);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".init-button")));
			
		}
}

