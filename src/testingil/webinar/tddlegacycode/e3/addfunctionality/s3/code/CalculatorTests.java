package testingil.webinar.tddlegacycode.e3.addfunctionality.s3.code;

import org.junit.jupiter.api.Test;

class CalculatorTests extends BaseCalculatorTests{

	@Test
	void number_after_minus_should_still_display() {
		pressing("9-").shouldShow("9");
	}

}
