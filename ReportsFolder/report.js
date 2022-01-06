$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SupperBll/SupperBill.feature");
formatter.feature({
  "name": "Supper Bill flows",
  "description": "",
  "keyword": "Feature"
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
  "name": "I navigate to patient grid With Supper Bill",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid_SupperBillTab.I_navigate_to_patient_grid_SupperBill()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify deleting Scheduled Appointment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeUSMM_SupperBill_ScheduleAppointmentDelete"
    }
  ]
});
formatter.step({
  "name": "I click on schedule tab",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_click_on_scheduletab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see already scheduled appointment",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_SoapNotes.I_should_see_Already_Added_Appointment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_Click_Three_Dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete appointment",
  "keyword": "And "
});
formatter.match({
  "location": "SD_SoapNotes.I_Click_delete_appointmentBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see delete appointment message",
  "keyword": "And "
});
formatter.match({
  "location": "SD_SoapNotes.I_should_see_appointment_DeleteMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("Include/features/PatientGrid/SupperBll/SupperBill_NewCases.feature");
formatter.feature({
  "name": "Supper Bill flows",
  "description": "",
  "keyword": "Feature"
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
  "name": "Verify deleting Scheduled Appointment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeUSMM_SupperBill_ScheduleAppointmentDelete"
    }
  ]
});
formatter.step({
  "name": "I click on schedule tab",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_click_on_scheduletab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see already scheduled appointment",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_SoapNotes.I_should_see_Already_Added_Appointment()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object \u0027Object Repository/OR_PatientGrid/OR_PatientData/SoapNotes/Obj_AlreadyAppointment\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat patientGrid.SD_SoapNotes.I_should_see_Already_Added_Appointment(SD_SoapNotes.groovy:210)\r\n\tat ✽.I should see already scheduled appointment(Include/features/PatientGrid/SupperBll/SupperBill_NewCases.feature:80)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/OR_PatientGrid/OR_PatientData/SoapNotes/Obj_AlreadyAppointment\u0027 located by \u0027(//div[@class\u003d\u0027k-event k-event-inverse\u0027])/span[2]\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1368)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:78)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat patientGrid.SD_SoapNotes.I_should_see_Already_Added_Appointment(SD_SoapNotes.groovy:210)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_DeleteScheduleAppointment.run(TC_DeleteScheduleAppointment:5)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:442)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:433)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:412)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:404)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:281)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:202)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:164)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:105)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:181)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1641453672384.run(TempTestSuite1641453672384.groovy:36)\r\n",
  "status": "failed"
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
  "name": "I click on delete appointment",
  "keyword": "And "
});
formatter.match({
  "location": "SD_SoapNotes.I_Click_delete_appointmentBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see delete appointment message",
  "keyword": "And "
});
formatter.match({
  "location": "SD_SoapNotes.I_should_see_appointment_DeleteMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});