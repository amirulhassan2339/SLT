$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CarePlan/ExistingCarePlan.feature");
formatter.feature({
  "name": "Existing Care Plan",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Existing Approved Care Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeUSMM_ExistingApproved"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "When "
});
formatter.step({
  "name": "I am on PWB",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "And "
});
formatter.step({
  "name": "I shoule see approved care plan as \u003cExistingCarePlan\u003e",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "ExistingCarePlan"
      ]
    },
    {
      "cells": [
        "Dermo505, Mac505",
        "TestApproved"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Existing Approved Care Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeUSMM_ExistingApproved"
    }
  ]
});
formatter.step({
  "name": "I search Dermo505, Mac505 using global search",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on PWB",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.I_am_on_PWB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Care_Plan_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I shoule see approved care plan as TestApproved",
  "keyword": "* "
});
formatter.match({
  "location": "SD_Existing_CarePlan.I_shoule_see_approved_existing_care_plan(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});