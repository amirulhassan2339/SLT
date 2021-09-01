package patientGrid

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import cucumber.api.java.en.And
import cucumber.api.java.en.Then
import internal.GlobalVariable

public class SD_CMStatus_CareCoordination {
	
	@And("I select (.*) as cm status")
	public void Select_CMStatus(String CM_Status) {


		Thread.sleep(5000)
		WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/CM Status/CM Left Filters/Obj_CmStatus_Click'))

//		if(CM_Status== CM_Status) {
//
//
//
//			WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/LeftFiltersObjects/OR_LOB/Obj_LOBFilterSelect'))
//		}
//
//		else {
//
//			throw new NoSuchElementException("Can't find " + CM_Status + " in dropdown");
//		}



				String xpath = '(//ul[@id="toc_filter_pgm_status_listbox"])//li[text() = "'+CM_Status+'"])'
		
				TestObject too = new TestObject(findTestObject('(//ul[@id="toc_filter_pgm_status_listbox"])//li[text()= "'+CM_Status+'"])'))
		
				too.addProperty("xpath", ConditionType.CONTAINS, xpath)
				WebUI.click(too)








		//		WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/LeftFiltersObjects/OR_LOB/Obj_LOB_Click'))
		//		Thread.sleep(2000)
		//		WebUI.click(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/LeftFiltersObjects/OR_LOB/Obj_LOB_select'))
	}
	
	@Then("I should see care cordination cm status (.*) filters")
	public void I_should_see_care_cordination_LOB_filters(String CM_Status) {


		String Actual_LOB = WebUI.getText(findTestObject('Object Repository/CareCordination_LeftFilters/OR_LeftFilters/GridObjects/Obj_LOB'))

		if(!Actual_LOB.is(CM_Status)) {

			WebUI.verifyEqual(CM_Status, Actual_LOB)
		}else {

			throw new NoSuchElementException("Can't find " + CM_Status + " in Grid");
		}
	}
	
}
