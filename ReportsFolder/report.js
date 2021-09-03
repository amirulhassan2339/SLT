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
  "name": "I should see care cordination cm status \u003cCM_Status\u003e filters",
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
    },
    {
      "cells": [
        "Active"
      ]
    },
    {
      "cells": [
        "Completed"
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
  "name": "I should see care cordination cm status Eligible filters",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "I select Active as cm status",
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
  "name": "I should see care cordination cm status Active filters",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "I select Completed as cm status",
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
  "name": "I should see care cordination cm status Completed filters",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CMStatus_CareCoordination.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "passed"
});
});