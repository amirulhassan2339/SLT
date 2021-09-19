package patientTimer

import org.junit.runner.RunWith

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber


@RunWith(Cucumber.class)
@CucumberOptions(features="Include/features/PatientGrid/CarePlan/PatientTimer.feature",
glue="",
tags = "@Regression_PatientWorkFlowBox_NonBillable",
plugin=["pretty", "html:ReportsFolder", "json:ReportsFolder/cucumber.json"])

public class CR_PatientWorkFlowBoxNonBillable {
}
