Feature: Patient Timer

	Background: 
		Given I navigate to patient grid

	@Smoke_USMM
	Scenario Outline: Verify Patient Timer Feature While User Is On Patient Grid_Billable
		When I search <Patient> using global search
		   * I verify patient is selected
		   * I click on patient timer button
		Then I should see patient <Patient> as patient_name in timer popup
		#* I drag the popup
		   * I should see current date
		   * I select patient timer program
		   * I verify billable checkbox
		   * I click on start timer button
		   * I click on notes tab
		   * I should see patient <Patient> as patient_name in timer popup
		   * I click on plus notes button
		   * I should see notes popup
		   * I select priority
		   * I select type
		   * I <Enter_Notes> notes
		   * I click on save btn
		   * I should see newly added note
		   * I click on care plan tab
		   * I should see patient <Patient> as patient_name in timer popup
		   * I click on add new care plan button
		   * I click on basedonpatientmedicalrecord
		   * I should see patient <Patient> as patient_name
		   * I enter title <Title>
		   * I click on save and close button
		   * I should see success message <SucessMessage> of CP
		#		   * I click on encounter tab
		#		   * I should see patient <Patient> as patient_name in timer popup
		When I click on minimize button
		   * I click on notes tab
		   * I should not see patient timer popup
		   * I click on plus notes button
		   * I should see notes popup
		   * I select privacy
		   * I select priority
		   * I select type
		   * I <Enter_Notes> notes
		   * I click on save btn
		   * I should see newly added note
		   * I click on care plan tab
		   * I should not see patient timer popup
		   * I click on add new care plan button
		   * I click on basedonpatientmedicalrecord
		   * I should see patient <Patient> as patient_name
		   * I enter title <Title>
		   * I click on save and close button
		   * I should see success message <SucessMessage> of CP
		#* I click on encounter tab
		#Then I should not see patient timer popup
		   * I click on patient timer button again
		   * I click on stop timer button
		   * I enter <Comment> as comment in timer popup
		   * I click on update button
		Then I should see success message <TimerSucessMessage> of timer
		   * I click on history tab
		   * I should see patient timer history

		Examples: 
			| Patient          | TimerSucessMessage                                     | Comment | Diagnosis | Title          | SucessMessage                           | Enter_Notes                                                               |
			| Dermo505, Mac505 | successPatient Time has been updated successfully.Hide | Test    | T79.5xxA  | TestingPatient | successCare Plan Saved SuccessfullyHide | Lorem Ipsum is simply dummy text of the printing and typesetting industry |
#	@Smoke_USMM
#	Scenario Outline: Verify Patient Timer Feature While User Is On Patient Work Flow Box_Billable
#		When I search <Patient> using global search
#		   * I select the patient
#		   * I click on patient timer button_WFB
#		Then I should see patient <Patient> as patient_name in timer popup
#		   * I should see current date
#		   * I select patient timer program_WFB
#		   * I verify billable checkbox
#		   * I click on start timer button
#		   * I click on notes tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		   * I click on care plan tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		   * I click on encounter tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		When I click on minimize button
#		   * I click on notes tab
#		   * I click on care plan tab
#		   * I click on encounter tab
#		Then I should not see patient timer popup
#		   * I click on patient timer button again_WFB
#		   * I click on stop timer button
#		   * I enter <Comment> as comment in timer popup
#		   * I click on update button
#		Then I should see success message <TimerSucessMessage> of timer
#		   * I click on history tab
#		   * I should see patient timer history_WFB
#
#		Examples: 
#			| Patient          | TimerSucessMessage                                     | Comment | Diagnosis |
#			| Dermo505, Mac505 | successPatient Time has been updated successfully.Hide | Test    | T79.5xxA  |
#
#	@Smoke_USMM
#	Scenario Outline: Verify Patient Timer Feature While User Is On Patient Grid_NonBillable
#		When I search <Patient> using global search
#		   * I verify patient is selected
#		   * I click on patient timer button
#		Then I should see patient <Patient> as patient_name in timer popup
#		   * I checked non billable checkbox
#		   * I should see current date
#		   * I select patient timer program
#		   * I click on start timer button
#		   * I click on notes tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		   * I click on care plan tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		   * I click on encounter tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		When I click on minimize button
#		   * I click on notes tab
#		   * I click on care plan tab
#		   * I click on encounter tab
#		Then I should not see patient timer popup
#		   * I click on patient timer button again
#		   * I verify Non_billable checkbox is checked
#		   * I click on stop timer button
#		   * I enter <Comment> as comment in timer popup
#		   * I click on update button
#		Then I should see success message <TimerSucessMessage> of timer
#		   * I click on history tab
#		   * I should see patient timer history
#
#		Examples: 
#			| Patient          | TimerSucessMessage                                     | Comment | Diagnosis |
#			| Dermo505, Mac505 | successPatient Time has been updated successfully.Hide | Test    | T79.5xxA  |
#
#	@Smoke_USMM
#	Scenario Outline: Verify Patient Timer Feature While User Is On Patient Work Flow Box_NonBillable
#		When I search <Patient> using global search
#		   * I select the patient
#		   * I click on patient timer button_WFB
#		Then I should see patient <Patient> as patient_name in timer popup
#		   * I checked non billable checkbox
#		   * I should see current date
#		   * I select patient timer program_WFB
#		   * I click on start timer button
#		   * I click on notes tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		   * I click on care plan tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		   * I click on encounter tab
#		   * I should see patient <Patient> as patient_name in timer popup
#		When I click on minimize button
#		   * I click on notes tab
#		   * I click on care plan tab
#		   * I click on encounter tab
#		Then I should not see patient timer popup
#		   * I click on patient timer button again_WFB
#		   * I verify Non_billable checkbox is checked
#		   * I click on stop timer button
#		   * I enter <Comment> as comment in timer popup
#		   * I click on update button
#		Then I should see success message <TimerSucessMessage> of timer
#		   * I click on history tab
#		   * I should see patient timer history_WFB
#
#		Examples: 
#			| Patient          | TimerSucessMessage                                     | Comment | Diagnosis |
#			| Dermo505, Mac505 | successPatient Time has been updated successfully.Hide | Test    | T79.5xxA  |
