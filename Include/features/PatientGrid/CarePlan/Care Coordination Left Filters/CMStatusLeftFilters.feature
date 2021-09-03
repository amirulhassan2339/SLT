Feature: CM Status - Care Coordination

#	Background: 
#		Given I navigate to patient grid

	@Smoke_USMM
	Scenario Outline: CM Status Left Filters Verification
		When I click on care cordination
		   * I clear before and after dates
		   * I click on care cordination reset button
		   * I clear before and after dates
		   * I select <CM_Status> as cm status
		   * I click on care cordination apply button
		Then I should see patients with CM Status as <CM_Status> on care coordination grid

		Examples: 
			| CM_Status |
			| Eligible  |
			| Active    |
			| Completed |

#			@Smoke_USMM
#	Scenario Outline: CM Status hyperlink - Popup and verification on pop up as well as grid
#
#		When I click on CM link
#		   * I should see popup details
#
#		Examples: 
#			| CM_Status |
#			| Eligible  |
#			| Active    |
#			| Completed |
			