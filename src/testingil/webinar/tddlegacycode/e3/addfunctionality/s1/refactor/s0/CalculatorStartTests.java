package testingil.webinar.tddlegacycode.e3.addfunctionality.s1.refactor.s0;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CalculatorStartTests extends BaseCalculatorTests{

	@Test
	void when_pressing_plus_should_show_0() {
		pressing("+").shouldShow("0");
	}

	@Test
	void when_pressing_div_should_show_0() {
		pressing("/").shouldShow("0");
	}

	@Test
	void when_pressing_equal_should_show_0() {
		pressing("=").shouldShow("0");
	}
}
