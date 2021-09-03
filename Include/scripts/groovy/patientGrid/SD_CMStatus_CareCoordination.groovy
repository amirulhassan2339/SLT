package patientGrid

import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.WebDriver

import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.And
import cucumber.api.java.en.Then

public class SD_CMStatus_CareCoordination {

	WebDriver driver;

	@And("I select (.*) as cm status")

	public void selectStatus(String CM_Status)

	{

		Thread.sleep(5000)

		WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Left Filters/Obj_CmStatus_Click'))

		if(CM_Status== "Eligible") {

			WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Left Filters/Obj_CmStatus_Eligible'))
		}

		if(CM_Status== "Active") {

			WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Left Filters/Obj_CmStatus_Active'))
		}


		if(CM_Status== "Completed") {

			WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Left Filters/Obj_CmStatus_Completed'))
		}


		



	}


	@Then("I should see patients with CM Status as (.*) on care coordination grid")
	public void I_should_see_care_cordination_LOB_filters(String CM_Status) {


		String Actual_CMStatus = WebUI.getText(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Grid/Obj_VerifyCMStatus'))

		if(!Actual_CMStatus.is(CM_Status)) {

			WebUI.verifyEqual(CM_Status, Actual_CMStatus)
		}else {

			throw new NoSuchElementException("Can't find " + CM_Status + " in Grid");
		}
	}

	@And("I click on CM link")
	public void Click_CMStatus() {

		WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Grid/Obj_ClickCMStatusLink'))

		Thread.sleep(8000)
	}


	@Then("I should see popup details")
	public void I_should_see_popup_details() {


		String Actual_CMStatus = WebUI.getText(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Grid/Obj_VerifyAlertTitle'))

		WebUI.verifyEqual(Actual_CMStatus, "Notification Details")

	}

}
