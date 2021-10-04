Feature: Care Plan - Notes - Forms

	Background: 
		Given I navigate to patient grid

	Scenario Outline: Verify Transition Of Care Form - Courtesy Calls
		When I search <Patient> using global search
		 And I click on notes tab
		   * I click on plus form
		   * I click on transition of care form
		   * I should see <Patient> as patient name in form popup
		   * I should see transition of care form title
		   * I enter <DateTime> as date of service date and time
		   * I select privacy:<privacy>
		   * I select priority:<priority>
		   * I enter <ProviderName> as Provider Name and Contact
		   * I select contact method:<ContactMethod>
		   * I select discussed with:<DiscussWith>
		   * I select Additional records reviewed through:<AdditionalRecords>
		   * I enter <NotifiedName> as notified name
		   * I enter <Title> as notified title
		   * I enter <DateTime> as notified date and time
		   * I enter <FaceToFaceName> as Non Face to Face Completed By
		   * I enter <Signature> as Non Face to Face Completed By signature
		   * I enter <DateTime> as Non Face to Face Completed By date and time
		   * I enter <Attempt1_DateTime> as attempt1
		   * I enter <Attempt2_DateTime> as attempt2
		   * I select attempt no one dropdown value
		   * I select attempt no two dropdown value
		   * I enter <DateOfDischarge> as of discharge location date
		   * I enter <DischargeLocation> as discharge location
		   * I enter <HowAreYouFeeling?> as how are you feeling since discharge
		   * I click on save button to save transition of care form data
		Then I should see record success message

		Examples: 
			| Patient          | DateTime          | DateOfDischarge | privacy | priority | ProviderName | ContactMethod | DiscussWith | NotifiedName  | Title        | FaceToFaceName                                  | Signature | Attempt1_DateTime | Attempt2_DateTime | DischargeLocation | HowAreYouFeeling |
			| Dermo505, Mac505 | 03152021 03:20 AM |        03152021 | Private | Low      | Amir         |            20 |          30 | Mehmood Anjum | yet, another | Cholera due to Vibrio cholerae 01, biovar eltor |  01032020 |          05032021 |          04032020 |          05032020 |         06032020 |

	Scenario Outline: Verify Transition Of Care Form - ER Follow Up Calls
		When I search <Patient> using global search
		 And I click on notes tab
		   * I click on plus form
		   * I click on transition of care form
		   * I should see <Patient> as patient name in form popup
		   * I should see transition of care form title
		   * I enter <DateTime> as date of service date and time
		   * I select privacy:<privacy>
		   * I select priority:<priority>
		   * I enter <ProviderName> as Provider Name and Contact
		   * I select contact method:<ContactMethod>
		   * I select discussed with:<DiscussWith>
		   * I select Additional records reviewed through:<AdditionalRecords>
		   * I enter <NotifiedName> as notified name
		   * I enter <Title> as notified title
		   * I enter <DateTime> as notified date and time
		   * I enter <FaceToFaceName> as Non Face to Face Completed By
		   * I enter <Signature> as Non Face to Face Completed By signature
		   * I enter <DateTime> as Non Face to Face Completed By date and time
		   * I enter <Attempt1_DateTime> as attempt1
		   * I enter <Attempt2_DateTime> as attempt2
		   * I select attempt no one dropdown value
		   * I select attempt no two dropdown value
		   * I enter <DateOfDischarge> as of discharge location date
		   * I enter <DischargeLocation> as discharge location
		   * I enter <HowAreYouFeeling?> as how are you feeling since discharge
		   * I click on save button to save transition of care form data
		Then I should see record success message

		Examples: 
			| Patient          | DateTime          | DateOfDischarge | privacy | priority | ProviderName | ContactMethod | DiscussWith | NotifiedName  | Title        | FaceToFaceName                                  | Signature | Attempt1_DateTime | Attempt2_DateTime | DischargeLocation | HowAreYouFeeling |
			| Dermo505, Mac505 | 03152021 03:20 AM |        03152021 | Private | Low      | Amir         |            20 |          30 | Mehmood Anjum | yet, another | Cholera due to Vibrio cholerae 01, biovar eltor |  01032020 |          05032021 |          04032020 |          05032020 |         06032020 |

	Scenario Outline: Verify Transition Of Care Form - Hospital Discharge Calls
		When I search <Patient> using global search
		 And I click on notes tab
		   * I click on plus form
		   * I click on transition of care form
		   * I should see <Patient> as patient name in form popup
		   * I should see transition of care form title
		   * I enter <DateTime> as date of service date and time
		   * I select privacy:<privacy>
		   * I select priority:<priority>
		   * I enter <ProviderName> as Provider Name and Contact
		   * I select contact method:<ContactMethod>
		   * I select discussed with:<DiscussWith>
		   * I select Additional records reviewed through:<AdditionalRecords>
		   * I enter <NotifiedName> as notified name
		   * I enter <Title> as notified title
		   * I enter <DateTime> as notified date and time
		   * I enter <FaceToFaceName> as Non Face to Face Completed By
		   * I enter <Signature> as Non Face to Face Completed By signature
		   * I enter <DateTime> as Non Face to Face Completed By date and time
		   * I enter <Attempt1_DateTime> as attempt1
		   * I enter <Attempt2_DateTime> as attempt2
		   * I select attempt no one dropdown value
		   * I select attempt no two dropdown value
		   * I enter <DateOfDischarge> as of discharge location date
		   * I enter <DischargeLocation> as discharge location
		   * I enter <HowAreYouFeeling?> as how are you feeling since discharge
		   * I click on save button to save transition of care form data
		Then I should see record success message

		Examples: 
			| Patient          | DateTime          | DateOfDischarge | privacy | priority | ProviderName | ContactMethod | DiscussWith | NotifiedName  | Title        | FaceToFaceName                                  | Signature | Attempt1_DateTime | Attempt2_DateTime | DischargeLocation | HowAreYouFeeling |
			| Dermo505, Mac505 | 03152021 03:20 AM |        03152021 | Private | Low      | Amir         |            20 |          30 | Mehmood Anjum | yet, another | Cholera due to Vibrio cholerae 01, biovar eltor |  01032020 |          05032021 |          04032020 |          05032020 |         06032020 |

	Scenario Outline: Verify Transition Of Care Form - Surgical Follow Up Calls
		When I search <Patient> using global search
		 And I click on notes tab
		   * I click on plus form
		   * I click on transition of care form
		   * I should see <Patient> as patient name in form popup
		   * I should see transition of care form title
		   * I enter <DateTime> as date of service date and time
		   * I select privacy:<privacy>
		   * I select priority:<priority>
		   * I enter <ProviderName> as Provider Name and Contact
		   * I select contact method:<ContactMethod>
		   * I select discussed with:<DiscussWith>
		   * I select Additional records reviewed through:<AdditionalRecords>
		   * I enter <NotifiedName> as notified name
		   * I enter <Title> as notified title
		   * I enter <DateTime> as notified date and time
		   * I enter <FaceToFaceName> as Non Face to Face Completed By
		   * I enter <Signature> as Non Face to Face Completed By signature
		   * I enter <DateTime> as Non Face to Face Completed By date and time
		   * I enter <Attempt1_DateTime> as attempt1
		   * I enter <Attempt2_DateTime> as attempt2
		   * I select attempt no one dropdown value
		   * I select attempt no two dropdown value
		   * I enter <DateOfDischarge> as of discharge location date
		   * I enter <DischargeLocation> as discharge location
		   * I enter <HowAreYouFeeling?> as how are you feeling since discharge
		   * I click on save button to save transition of care form data
		Then I should see record success message

		Examples: 
			| Patient          | DateTime          | DateOfDischarge | privacy | priority | ProviderName | ContactMethod | DiscussWith | NotifiedName  | Title        | FaceToFaceName                                  | Signature | Attempt1_DateTime | Attempt2_DateTime | DischargeLocation | HowAreYouFeeling |
			| Dermo505, Mac505 | 03152021 03:20 AM |        03152021 | Private | Low      | Amir         |            20 |          30 | Mehmood Anjum | yet, another | Cholera due to Vibrio cholerae 01, biovar eltor |  01032020 |          05032021 |          04032020 |          05032020 |         06032020 |
