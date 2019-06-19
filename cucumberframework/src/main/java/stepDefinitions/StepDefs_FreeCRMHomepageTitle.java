package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs_FreeCRMHomepageTitle {
	
	WebDriver driver;
	
	@Given("^Launch the browser$")
	public void launch_the_browser()  {
		String path = System.getProperty("user.dir");	
	System.setProperty("webdriver.chrome.driver", path +"//Drivers//chromedriver.exe");
	 driver=new ChromeDriver();
		System.out.println("launch browser");
	
	   
	}

	@When("^Open FreeCRM Base URL$")
	public void open_FreeCRM_Base_URL() {
		driver.get("https://freecrm.com/");
		System.out.println("Open Freecrm browser");
	  
	}

	@Then("^Verify the Title of the home page$")
	public void verify_the_Title_of_the_home_page()  {
		String title=driver.getTitle();
		System.out.println("title is"+title);
		System.out.println("verif title of home page");
	  
	}
	@Then("^Close the browser$")
	public void CloseBrowser()
	{
		driver.quit();
	}
	
   @Then ("^Click on Login$")   
   public void loginclick()
   {
	   try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	   driver.findElement(By.xpath("//span[@class='icon icon-xs mdi-chart-bar']")).click();
   }
   @Then ("^Enteru \"([^\"]*)\"$")
   public void Enterusername(String uname)
   {
	   driver.findElement(By.xpath("//input[@name='email']")).sendKeys(uname);
   }
   @Then ("^Enterp \"([^\"]*)\"$")
   public void Enterpassword(String pwd)
   {
	   driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
   }
   @Then ("^click LoginButton$")
   public void EnterSignButton()
   {
	   driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
   }
   @Then("^this is foring test$")
   public void this_is_foring_test() {
      
   }
}
