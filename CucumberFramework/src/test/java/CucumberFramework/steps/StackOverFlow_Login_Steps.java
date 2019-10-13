package CucumberFramework.steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StackOverFlow_Login_Steps {

	WebDriver driver;
	
	@Before()
	public void Setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Desktop\\cucumberJavaFramework\\CucumberFramework\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}
	
	
	@Given("^User is on the StackOverFlow website$")
	public void user_is_on_the_StackOverFlow_website() throws Throwable {
	    System.out.println("User is on the StackOverFlow website");
	    driver.get("https://stackoverflow.com/");
	}

	@When("^Clicks on the Login Link and is navigated to login page$")
	public void clicks_on_the_Login_Link_and_is_navigated_to_login_page() throws Throwable {
		System.out.println("Clicks on the Login Link and is navigated to login page");
		//driver.manage().wait();
		driver.findElement(By.xpath("/html//div[@role='menubar']/ol[2]//a[@href='https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f']")).click();
	}

	@When("^User enters valid username$")
	public void user_enters_valid_username() throws Throwable {
		System.out.println("User enters valid username");
		driver.findElement(By.xpath("/html//input[@id='email']")).sendKeys("#ENTER_USERNAME");
	}

	@When("^User enters valid password$")
	public void user_enters_valid_password() throws Throwable {
		System.out.println("User enters valid password");
		driver.findElement(By.xpath("/html//input[@id='password']")).sendKeys("#ENTER_PWD");
	}

	@When("^User clicks on login$")
	public void user_clicks_on_login() throws Throwable {
		System.out.println("User clicks on login");
		driver.findElement(By.xpath("/html//button[@id='submit-button']")).click();
	}

	@Then("^User is logged in the site$")
	public void user_is_logged_in_the_site() throws Throwable {
		System.out.println("User is logged in the site");
		WebElement stack_overflow_login_validate = driver.findElement(By.xpath("/html//button[@id='submit-button']"));
		Assert.assertEquals(true, stack_overflow_login_validate.isDisplayed());
	}
	
	//Runner Class Sample Example: Delete Later
	
	@Given("^User is on the StackOverFlow website(\\d+)$")
	public void user_is_on_the_StackOverFlow_website(int arg1) throws Throwable {
		System.out.println("User is on the StackOverFlow website2");
	}

	@When("^Clicks on the Login Link and is navigated to login page(\\d+)$")
	public void clicks_on_the_Login_Link_and_is_navigated_to_login_page(int arg1) throws Throwable {
		System.out.println("Clicks on the Login Link and is navigated to login page2");
	}

	@When("^User enters valid username(\\d+)$")
	public void user_enters_valid_username(int arg1) throws Throwable {
		System.out.println("User enters valid username2");
	}

	@When("^User enters valid password(\\d+)$")
	public void user_enters_valid_password(int arg1) throws Throwable {
		System.out.println("User enters valid password2");
	}

	@When("^User clicks on login(\\d+)$")
	public void user_clicks_on_login(int arg1) throws Throwable {
		System.out.println("User clicks on login2");
	}

	@Then("^User is logged in the site(\\d+)$")
	public void user_is_logged_in_the_site(int arg1) throws Throwable {
		System.out.println("User is logged in the site2");
	}
	
}
