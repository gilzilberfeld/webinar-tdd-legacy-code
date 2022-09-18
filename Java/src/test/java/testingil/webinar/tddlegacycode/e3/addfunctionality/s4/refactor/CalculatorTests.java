package testingil.webinar.tddlegacycode.e3.addfunctionality.s4.refactor;

import org.junit.jupiter.api.Test;

class CalculatorTests extends BaseCalculatorTests{

	@Test
	void number_after_minus_should_still_display() {
		pressing("9-").shouldShow("9");
	}

}
