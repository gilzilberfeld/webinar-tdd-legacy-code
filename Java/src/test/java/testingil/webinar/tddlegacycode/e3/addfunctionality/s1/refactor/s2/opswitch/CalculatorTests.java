package testingil.webinar.tddlegacycode.e3.addfunctionality.s1.refactor.s2.opswitch;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class CalculatorTests extends BaseCalculatorTests {

	@Test
	@Disabled("Need to refactor first")
	void number_after_minus_should_still_display() {
		pressing("9-").shouldShow("9");
	}

}
