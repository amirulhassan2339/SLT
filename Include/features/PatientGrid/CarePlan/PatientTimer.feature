Feature: Patient Timer

	Background: 
		Given I navigate to patient grid

	@Smoke_USMM
	Scenario Outline: Verify Patient Timer Feature While User Is On Patient Grid
		When I search <Patient> using global search
		   * I select the patient
		   * I click on patient timer button
		Then I should see patient <Patient> as patient_name in timer popup
		   * I click on start button
		   * I click on notes tab
		   * I click on care plan tab
		   * I click on encounter tab
		When I click on minimize button
		   * I click on notes tab
		   * I click on care plan tab
		   * I click on encounter tab
		Then I should not see patient timer popup
		   * I click on patient timer button again
		   * I click on stop button
		   * I get total timer duratoin
		   * I enter <Comment> as comment in timer popup
		   * I click on update button
		Then I should see success message <SucessMessage> of timer
		* I click on history tab
		* I should see 

		Examples: 
			| Patient          | SucessMessage                               | Comment |
			| Dermo505, Mac505 | successPatient Time has been updated successfully.Hide | Test    |
