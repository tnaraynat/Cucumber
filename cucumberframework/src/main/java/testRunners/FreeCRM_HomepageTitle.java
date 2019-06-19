package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(features="F:/nari/AutomationPractise/cucumberframework/src/main/java/featuress/FreeCRMHomepage.feature", glue="stepDefinitions")
public class FreeCRM_HomepageTitle {
 
}