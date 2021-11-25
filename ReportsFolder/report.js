$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/ScheduleLeftFilters.feature");
formatter.feature({
  "name": "Scheduled Left Filters flow",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Add Block By Adding",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Schedule_AddBlock"
    }
  ]
});
formatter.step({
  "name": "I click on Add Block button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see add block title",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter \u003cBlockName\u003e as blockname",
  "keyword": "When "
});
formatter.step({
  "name": "I enter \u003cStartDate\u003e as block_StartDate",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \u003cTime\u003e as block_Time",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e as block_comment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on save block button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see block successful save message",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.step({
  "name": "I click on delete block button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BlockName",
        "Time",
        "StartDate",
        "Comment"
      ]
    },
    {
      "cells": [
        "Amir",
        "1:30 AM",
        "01072021",
        "Adding block notes"
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
  "name": "I navigate to CMR_Schedule",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid_ScheduleTab.I_navigate_to_patient_grid_Schedule()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/OR_PatientGrid/Schedule/Obj_Schedule\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_PatientGrid_ScheduleTab.I_navigate_to_patient_grid_Schedule(SD_PatientGrid_ScheduleTab.groovy:41)\r\n\tat ✽.I navigate to CMR_Schedule(Include/features/PatientGrid/ScheduleLeftFilters.feature:4)\r\nCaused by: org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: MicrosoftEdge\u003d95.0.1020.40)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027SLT339AMIR\u0027, ip: \u0027192.168.10.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CEdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 95.0.1020.40, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:49900}, msedge: {msedgedriverVersion: 95.0.1020.40 (1f61f1c45c1e4..., userDataDir: C:\\Users\\HAFIZ~1.AMI\\AppDat...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fb37eb07f34ca34532954c5b93663411\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CEdgeDriver.execute(CEdgeDriver.java:20)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:68)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SD_PatientGrid_ScheduleTab.I_navigate_to_patient_grid_Schedule(SD_PatientGrid_ScheduleTab.groovy:41)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_AddBlock.run(TC_AddBlock:5)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:430)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:421)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:400)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:392)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:273)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:202)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:164)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:105)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1635969586766.run(TempTestSuite1635969586766.groovy:36)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Add Block By Adding",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Schedule_AddBlock"
    }
  ]
});
formatter.step({
  "name": "I click on Add Block button",
  "keyword": "When "
});
formatter.match({
  "location": "SD_Schedule.AddBlockBTn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see add block title",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_Schedule.BlockTitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Amir as blockname",
  "keyword": "When "
});
formatter.match({
  "location": "SD_Schedule.SetBlockName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter 01072021 as block_StartDate",
  "keyword": "And "
});
formatter.match({
  "location": "SD_Schedule.SetBlockStartDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter 1:30 AM as block_Time",
  "keyword": "* "
});
formatter.match({
  "location": "SD_Schedule.SetBlockTime(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Adding block notes as block_comment",
  "keyword": "* "
});
formatter.match({
  "location": "SD_Schedule.SetBlockComment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save block button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_Schedule.ClickSaveBlockBTN()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see block successful save message",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_Schedule.ValidateBlockSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_Click_Three_Dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on delete block button",
  "keyword": "And "
});
formatter.match({
  "location": "SD_Schedule.ClickDeleteBlockBTN()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});