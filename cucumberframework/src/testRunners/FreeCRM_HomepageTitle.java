package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(features="features/FreeCRMHomepage", glue="stepDefinitions/StepDefs_FreeCRMHomepageTitle")
public class FreeCRM_HomepageTitle {
 
}