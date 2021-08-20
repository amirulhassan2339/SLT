package patientGrid
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class SD_PatientTimer {


	@And("I click on patient timer button")
	public void click_On_PatientTimer_Button() {


		Thread.sleep(4000)
		WebUI.waitForElementClickable(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerBtn'), 30)

		WebUI.click(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerBtn'))
		Thread.sleep(2000)
	}
	
	@And("I click on encounter tab")
	public void click_On_Encounter_Tab() {

		WebUI.click(findTestObject('Object Repository/OR_PatientGrid/OR_PatientData/OR_NonClinicalSection/OR_CarePlan/Notes/OR_Save/Obj_EncounterTab'))
		Thread.sleep(2000)
	}
	
	@Then("I should see patient (.*) as patient_name in timer popup")
	public void verify_Patient_Name_TimerPopUp(String Patient) {

		'Verify Care Plan Patient Name'


		String ActualName = WebUI.getText(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerPopUp_PatientNameVerify'))
		WebUI.verifyEqual(ActualName, Patient)


	}
	
	@And("I click on start button")
	public void click_On_start_Button() {

		WebUI.click(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerPopUp_StartBTN'))
		Thread.sleep(2000)
	}
	
	@And("I click on minimize button")
	public void click_Minimize_Button() {

		WebUI.click(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_mimimize'))
		Thread.sleep(2000)
	}
	
	@Then("I should not see patient timer popup")
	public void verify_PatientTimer_ShouldNotShow() {

		WebUI.verifyElementNotVisible(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerPopUp_PatientNameVerify'))
		
	}
	
	@And("I click on patient timer button again")
	public void click_On_PatientTimer_Button_again() {


		WebUI.click(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerBtn_Again'))
		Thread.sleep(2000)
	}
	
	@And("I click on stop button")
	public void click_On_PatientTimer_StopButton() {


		WebUI.click(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerPopUp_StopBTN'))
		Thread.sleep(2000)
	}
	
	@And("I get total timer duratoin")
	public void GetTotal_Duration() {


		String Actual_Duration = WebUI.getText(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimerPopUp_GetTotalTimerDuration'))
		
		
	}
	
	@And("I enter (.*) as comment in timer popup")
	public void EnterComment(String Comment) {


WebUI.setText(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_PatientTimer_Comment'), Comment)
		
		
	}
	
	@And("I click on update button")
	public void UpdateBTN() {


	WebUI.click(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_UpdateBTN'))
		
		
	}
	
	
	@Then("I should see success message (.*) of timer")
	public void I_should_see_intial_status_as_on_timer(String SucessMessage) {

		String Actual_Status = WebUI.getText(findTestObject('Object Repository/OR_PatientGrid/PatientTimer/Obj_TimerSuccessMessage'))

		WebUI.verifyEqual(Actual_Status, SucessMessage)
	}
	
}