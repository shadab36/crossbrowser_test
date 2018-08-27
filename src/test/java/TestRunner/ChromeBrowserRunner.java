package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = {".","."},
 glue= {"TestRunner.loginSteps"},
format = { "pretty", "html:target2" },
tags = {"@firefox_browser_test, @Chrome12_Browser"})

public class ChromeBrowserRunner {
}
