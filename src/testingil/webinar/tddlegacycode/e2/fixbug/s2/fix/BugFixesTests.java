package testingil.webinar.tddlegacycode.e2.fixbug.s2.fix;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BugFixesTests {

	private Calculator calc;
	private String result;
	
	@BeforeEach
	public void setup(){
		calc = new Calculator();
	}

	@Test
	void when_pressing_operation_at_start_should_show_0() {
		pressing("+").shouldShow("0");
	}

	private BugFixesTests pressing(String keys) {
		calc.press("C");
		keys.chars().forEach(c ->{
			calc.press(String.valueOf((char) c));
		}); 
		this.result = calc.getDisplay();
		return this;
	}

	private void shouldShow(String expected) {
		assertEquals(expected, result);

	}

}
