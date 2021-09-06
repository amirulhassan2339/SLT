$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CarePlan/Care Coordination Left Filters/CMStatusLeftFilters.feature");
formatter.feature({
  "name": "CM Status - Care Coordination",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "CM Status Left Filters Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "* "
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.step({
  "name": "I select \u003cCM_Status\u003e as cm status",
  "keyword": "* "
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see patients with CM Status as \u003cCM_Status\u003e on care coordination grid",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CM_Status"
      ]
    },
    {
      "cells": [
        "Eligible"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CM Status Left Filters Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_click_on_carecordination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_Reset_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Eligible as cm status",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.selectStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_CareCordination_Apply_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see patients with CM Status as Eligible on care coordination grid",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "CM Status hyperlink - Popup and verification on pop up as well as grid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on CM link",
  "keyword": "When "
});
formatter.step({
  "name": "I should see popup details",
  "keyword": "* "
});
formatter.step({
  "name": "I enter due date \u003cDue_Date\u003e as DT",
  "keyword": "* "
});
formatter.step({
  "name": "I select CM Status",
  "keyword": "* "
});
formatter.step({
  "name": "I enter care provider \u003cCareProvider\u003e as CP",
  "keyword": "* "
});
formatter.step({
  "name": "I enter care coordination \u003cCareCoordination\u003e as CC",
  "keyword": "* "
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.step({
  "name": "I should see this message \u003cSuccessMessage\u003e as Notification",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see patient details including \u003cCareCoordination\u003e AND \u003cCareProvider\u003e AND \u003cDue_Date\u003e AND CM_Status after updating data from popup",
  "keyword": "* "
});
formatter.step({
  "name": "I click on CM link again",
  "keyword": "* "
});
formatter.step({
  "name": "I select CM Status again",
  "keyword": "* "
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Due_Date",
        "CareProvider",
        "CareCoordination",
        "SuccessMessage"
      ]
    },
    {
      "cells": [
        "09162021 12:00 AM",
        "mehmood, mehmood",
        "Member, Mohsin",
        "successNotification updated successfullyHide"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CM Status hyperlink - Popup and verification on pop up as well as grid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM"
    }
  ]
});
formatter.step({
  "name": "I click on CM link",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Click_CMStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see popup details",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_popup_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter due date 09162021 12:00 AM as DT",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.user_Enter_DueDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select CM Status",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Select_CMStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter care provider mehmood, mehmood as CP",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.user_Enter_CareProvider(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter care coordination Member, Mohsin as CC",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.user_Enter_CareCoordination(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.ClickOnSaveBTNTO_()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see this message successNotification updated successfullyHide as Notification",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_notificationSuccessMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see patient details including Member, Mohsin AND mehmood, mehmood AND 09162021 12:00 AM AND CM_Status after updating data from popup",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_patientDataFromPopup(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on CM link again",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Click_CMStatus_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select CM Status again",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.Select_CMStatusAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on save button to save notification details",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.ClickOnSaveBTNTO_()"
});
formatter.result({
  "status": "passed"
});
});