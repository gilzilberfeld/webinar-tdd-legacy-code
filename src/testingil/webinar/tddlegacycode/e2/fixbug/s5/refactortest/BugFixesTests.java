package testingil.webinar.tddlegacycode.e2.fixbug.s5.refactortest;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BugFixesTests extends BaseCalculatorTests{

	@Test
	void when_pressing_plus_at_start_should_show_0() {
		pressing("+").shouldShow("0");
	}

	@Test
	void when_pressing_div_at_start_should_show_0() {
		pressing("/").shouldShow("0");
	}

	@Test
	void when_pressing_equal_at_start_should_show_0() {
		pressing("=").shouldShow("0");
	}
}
