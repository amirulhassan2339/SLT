$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/All Features Files For Cucumber Reports/All CareCoordination_CMStatus/CMStatusLeftFilters.feature");
formatter.feature({
  "name": "CM Status - Care Coordination",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "CM Status Left Filters Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "* "
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.step({
  "name": "I select \u003cCM_Status\u003e as cm status",
  "keyword": "* "
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see patients with CM Status as \u003cCM_Status\u003e on care coordination grid",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CM_Status"
      ]
    },
    {
      "cells": [
        "Eligible"
      ]
    },
    {
      "cells": [
        "Active"
      ]
    },
    {
      "cells": [
        "Completed"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CM Status Left Filters Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_click_on_carecordination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_Reset_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Eligible as cm status",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.selectStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_CareCordination_Apply_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see patients with CM Status as Eligible on care coordination grid",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CM Status Left Filters Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_click_on_carecordination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_Reset_Button()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/CareCordination_LeftFilters/OR_LeftFilters/LeftFiltersObjects/Obj_buttonReset\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_CareCordination_LeftFilters.click_On_Reset_Button(SD_CareCordination_LeftFilters.groovy:36)\r\n\tat ✽.I click on care cordination reset button(Include/features/PatientGrid/All Features Files For Cucumber Reports/All CareCoordination_CMStatus/CMStatusLeftFilters.feature:10)\r\nCaused by: org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-default btn-sm btn-reset pull-right\" id\u003d\"toc_filter_btn_reset\" data-bind\u003d\"click: reset\"\u003e...\u003c/button\u003e is not clickable at point (230, 629). Other element would receive the click: \u003cdiv class\u003d\"page-filter k-pane k-scrollable loading\" role\u003d\"group\" style\u003d\"position: absolute; top: 0px; width: 370px; height: 604px; left: 0px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d93.0.4577.63)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027SLT339AMIR\u0027, ip: \u0027192.168.10.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\HAFIZ~1.AMI\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:62062}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d1cf021f2facfdc5424a8b2339e8f481\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:68)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_CareCordination_LeftFilters.click_On_Reset_Button(SD_CareCordination_LeftFilters.groovy:36)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_CareCoordination_CMStatus.run(TC_CareCoordination_CMStatus:7)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:430)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:421)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:400)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:392)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:273)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1631189393091.run(TempTestCase1631189393091.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Active as cm status",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.selectStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_CareCordination_Apply_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see patients with CM Status as Active on care coordination grid",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CM Status Left Filters Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_click_on_carecordination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_Reset_Button()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/CareCordination_LeftFilters/OR_LeftFilters/LeftFiltersObjects/Obj_buttonReset\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_CareCordination_LeftFilters.click_On_Reset_Button(SD_CareCordination_LeftFilters.groovy:36)\r\n\tat ✽.I click on care cordination reset button(Include/features/PatientGrid/All Features Files For Cucumber Reports/All CareCoordination_CMStatus/CMStatusLeftFilters.feature:10)\r\nCaused by: org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-default btn-sm btn-reset pull-right\" id\u003d\"toc_filter_btn_reset\" data-bind\u003d\"click: reset\"\u003e...\u003c/button\u003e is not clickable at point (230, 629). Other element would receive the click: \u003cdiv class\u003d\"page-filter k-pane k-scrollable loading\" role\u003d\"group\" style\u003d\"position: absolute; top: 0px; width: 370px; height: 604px; left: 0px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d93.0.4577.63)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027SLT339AMIR\u0027, ip: \u0027192.168.10.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\HAFIZ~1.AMI\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:56246}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3736c7bc04cdb3fa52ccb4f84a9e6cb2\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:68)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_CareCordination_LeftFilters.click_On_Reset_Button(SD_CareCordination_LeftFilters.groovy:36)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_CareCoordination_CMStatus.run(TC_CareCoordination_CMStatus:7)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:430)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:421)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:400)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:392)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:273)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1631189393091.run(TempTestCase1631189393091.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Completed as cm status",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.selectStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_CareCordination_Apply_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see patients with CM Status as Completed on care coordination grid",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("Include/features/PatientGrid/All Features Files For Cucumber Reports/All CareCoordination_CMStatus/CMStatus_HyperLink.feature");
formatter.feature({
  "name": "CM Status - Care Coordination",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "CM Status hyperlink - Popup and verification on pop up as well as grid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.step({
  "name": "I click on CM link",
  "keyword": "* "
});
formatter.step({
  "name": "I should see popup details",
  "keyword": "* "
});
formatter.step({
  "name": "I enter due date \u003cDue_Date\u003e as DT",
  "keyword": "* "
});
formatter.step({
  "name": "I select CM Status",
  "keyword": "* "
});
formatter.step({
  "name": "I enter care provider \u003cCareProvider\u003e as CP",
  "keyword": "* "
});
formatter.step({
  "name": "I enter care coordination \u003cCareCoordination\u003e as CC",
  "keyword": "* "
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.step({
  "name": "I should see this message \u003cSuccessMessage\u003e as Notification",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see patient details including \u003cCareCoordination\u003e AND \u003cCareProvider\u003e AND \u003cDue_Date\u003e AND CM_Status after updating data from popup",
  "keyword": "* "
});
formatter.step({
  "name": "I click on CM link again",
  "keyword": "* "
});
formatter.step({
  "name": "I select CM Status again",
  "keyword": "* "
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Due_Date",
        "CareProvider",
        "CareCoordination",
        "SuccessMessage"
      ]
    },
    {
      "cells": [
        "09162021 12:00 AM",
        "mehmood, mehmood",
        "Member, Mohsin",
        "successNotification updated successfullyHide"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CM Status hyperlink - Popup and verification on pop up as well as grid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_click_on_carecordination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on CM link",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Click_CMStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see popup details",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_popup_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter due date 09162021 12:00 AM as DT",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.user_Enter_DueDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select CM Status",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Select_CMStatus()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/Popup_Verification/Obj_CMStatus_Updated_SelectActive\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_CMStatus_CareCoordination.Select_CMStatus(SD_CMStatus_CareCoordination.groovy:177)\r\n\tat ✽.I select CM Status(Include/features/PatientGrid/All Features Files For Cucumber Reports/All CareCoordination_CMStatus/CMStatus_HyperLink.feature:13)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/Popup_Verification/Obj_CMStatus_Updated_SelectActive\u0027 located by \u0027(//ul[@data-role\u003d\"staticlist\"])[81]/li[2]\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1368)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:66)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_CMStatus_CareCoordination.Select_CMStatus(SD_CMStatus_CareCoordination.groovy:177)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_CareCoordination_CMStatus.run(TC_CareCoordination_CMStatus:7)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:430)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:421)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:400)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:392)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:273)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1631189393091.run(TempTestCase1631189393091.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter care provider mehmood, mehmood as CP",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.user_Enter_CareProvider(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter care coordination Member, Mohsin as CC",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.user_Enter_CareCoordination(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.ClickOnSaveBTNTO_()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see this message successNotification updated successfullyHide as Notification",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_notificationSuccessMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see patient details including Member, Mohsin AND mehmood, mehmood AND 09162021 12:00 AM AND CM_Status after updating data from popup",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_patientDataFromPopup(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on CM link again",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Click_CMStatus_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select CM Status again",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Select_CMStatusAgain()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.ClickOnSaveBTNTO_()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});