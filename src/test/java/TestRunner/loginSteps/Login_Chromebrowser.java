package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login_Chromebrowser {
	public static WebDriver dr;

	@Given("^navigate website url\\.$")
	public void navigate_website_url() {
		try {
			System.out.println("chrome browser test Environment");
			System.setProperty("webdriver.chrome.driver", "F:\\Driver of All\\chromedriver.exe");
			dr = new ChromeDriver();
			Thread.sleep(1000);
			dr.get("https://app360v43.appcara.net");
			dr.manage().window().maximize();
			dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		} catch (Exception e) {
		}
	}

	@Then("^Enter \"([^\"]*)\"\\.$")
	public void enter(String arg1) throws Throwable {

		dr.findElement(By.name("user_session[login]")).sendKeys(arg1);
		dr.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@Then("^Enter as \"([^\"]*)\"\\.$")
	public void enter_as(String arg1) throws Throwable {
		dr.findElement(By.name("user_session[password]")).sendKeys(arg1);
		dr.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("^click on signin button\\.$")
	public void click_on_signin_button() throws Throwable {
		dr.findElement(By.xpath("//*[@type='submit']")).click();
		dr.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}
}
