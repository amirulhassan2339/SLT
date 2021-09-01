Feature: CM Status - Care Coordination

	Background: 
		Given I navigate to patient grid

	@Smoke_USMM
	Scenario Outline: Applying CM Status Filter
		When I click on care cordination
		   * I clear before and after dates
		   * I click on care cordination reset button
		   * I clear before and after dates
		   * I select <CM_Status> as cm status
		   * I click on care cordination apply button
		Then I should see care cordination cm status <CM_Status> filters

		Examples: 
			| CM_Status |
			| Eligible  |
