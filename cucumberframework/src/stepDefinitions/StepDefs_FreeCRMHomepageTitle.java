package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs_FreeCRMHomepageTitle {
	
	WebDriver driver;
	
	@Given("^Launch the browser$")
	public void launch_the_browser()  {
		
	System.setProperty("WebDriver.chrome.driver", "F://nari//SeleniumSw//LatestChromedriver//chromedriver.exe");
	driver=new ChromeDriver();
	
	   
	}

	@When("^Open FreeCRM Base URL$")
	public void open_FreeCRM_Base_URL() {
		driver.get("https://freecrm.com/");
	  
	}

	@Then("^Verify the Title of the home page$")
	public void verify_the_Title_of_the_home_page()  {
		String title=driver.getTitle();
		System.out.println("title is"+title);
	  
	}


}
