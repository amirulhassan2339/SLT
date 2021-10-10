import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://slt-int.solitontechnologies.com/PersiviaPortal/invalid')

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Welcome to_username'), 'amir@slt.com')

WebUI.setEncryptedText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Welcome to_userpwd'), 
    'em0u++r5ZmAQM4xIcDgVLQ==')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Sign in'))

WebUI.selectOptionByValue(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/select_Aprima Enterprise_1MHPNPrime Healthcare'), 
    'mhpn', true)

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Schedule'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/div_11'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/td_'))

WebUI.doubleClick(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/td__1'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Cancel'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/div_10'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/i_Dermo505, Mac505 -Back painAmir, Hafiz_fa_c948ff'))

WebUI.doubleClick(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/td__1'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Patient_patientId_input'), 
    'dermo')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Patient_patientId_input'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Dermo505, Mac505MRN EntMerging505'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Patient_patientId_input'), 
    'Dermo505, Mac505')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/div_Reason_k-multiselect-wrap k-floatwrap'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/li_Back pain'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Create'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Yes'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Proceed'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/i_Dermo505, Mac505 -Back painAmir, Hafiz_fa_c948ff_1'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Based on patients medical record'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_HRA_k-button k-button-i-context k-gr_23bb3e'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Exam and Recommendations'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Select'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input__form-control ui-select-search ng-unt_599ce5'), 
    'Non-Urgent')

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/Obj_ReasonReferral'), 
    'Referral')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/div_Text must be a valid email.    Text is _207523'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/Obj_ReasonReferral'), 
    'Referral Reason')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Select'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input__form-control ui-select-search ng-unt_599ce5'), 
    '0.99')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Select'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input__form-control ui-select-search ng-unt_599ce5'), 
    '0.89')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Save'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Sign'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Selectselect'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/li_MHPN2'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Select'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/li_Bpci, Provider'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Sign'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Create_1'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/canvas_Create New Signature_sig-canvas'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Addendum'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/Obj_addendum_Textarea'), 
    'addendum notes test')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Save'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Close'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Superbill'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/Obj_MRNArrowClick'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_select_k-textbox'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_select_k-textbox'), 'EntMerging505')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Filter'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/img_Yes_patientAlert show-mrn'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/caption_CASE MANAGEMENT'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Done'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/div_successReferral status marked as done s_0b06d1'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Patients'))

WebUI.setText(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Care Coordination_query'), 
    'dermo')

WebUI.sendKeys(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/input_Care Coordination_query'), 
    Keys.chord(Keys.ENTER))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Encounter'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Add SOAP Note'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Based on patients medical record_1'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_Close'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/a_Schedule'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/i_Dermo505, Mac505 -Back painAmir, Hafiz_fa_c948ff_1'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/span_View SOAP Note'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Un-Sign'))

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Yes'))

WebUI.switchToWindowTitle('Welcome to Persivia!')

WebUI.click(findTestObject('AllSoapNoteTest/NewHRAFlows_Objects/button_Print'))

