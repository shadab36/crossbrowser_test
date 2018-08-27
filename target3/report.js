$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/AL Moin Webtech/App360v43Test/src/test/resources/Firefoxbrowser.feature");
formatter.feature({
  "line": 1,
  "name": "sign in Test On Web Application",
  "description": "",
  "id": "sign-in-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login the application.",
  "description": "",
  "id": "sign-in-test-on-web-application;login-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firefox_browser_test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "he/she provides the userEmail as \"\u003cUserEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he/she provides the password \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "sign-in-test-on-web-application;login-the-application.;",
  "rows": [
    {
      "cells": [
        "UserEmail",
        "Password"
      ],
      "line": 12,
      "id": "sign-in-test-on-web-application;login-the-application.;;1"
    },
    {
      "cells": [
        "test+art01@2pventures.com",
        "Test1234"
      ],
      "line": 13,
      "id": "sign-in-test-on-web-application;login-the-application.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login the application.",
  "description": "",
  "id": "sign-in-test-on-web-application;login-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firefox_browser_test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "he/she provides the userEmail as \"test+art01@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "he/she provides the password \"Test1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_FirefoxBrowser.navigate_website_url_test()"
});
formatter.result({
  "duration": 28835470447,
  "status": "passed"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 15517798,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\AL Moin Webtech\\AppData\\Local\\Temp\\rust_mozprofile.AeSwdwVKcIcr, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d61.0.1, platformVersion\u003d10.0, moz:processID\u003d8200.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt, moz:webdriverClick\u003dtrue}]\nSession ID: 6ecf37e1-4a51-48c4-b829-e156a942449f\n*** Element info: {Using\u003dcss selector, value\u003d.ks-btn}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Login_FirefoxBrowser.he_she_click_on_login_CTA(Login_FirefoxBrowser.java:35)\r\n\tat ✽.Then he/she click on login CTA.(C:/Users/AL Moin Webtech/App360v43Test/src/test/resources/Firefoxbrowser.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art01@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Login_FirefoxBrowser.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 30
    }
  ],
  "location": "Login_FirefoxBrowser.he_she_pass_the_app(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_FirefoxBrowser.he_she_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
});