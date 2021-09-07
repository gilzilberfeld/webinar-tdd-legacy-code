package testingil.webinar.tddlegacycode.e3.addfunctionality.s3.code;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;

public class BaseCalculatorTests {

	protected Calculator calc;
	protected String result;
	
	@BeforeEach
	public void setup(){
		calc = new Calculator();
	}
	
	protected BaseCalculatorTests pressing(String keys) {
		calc.press("C");
		keys.chars().forEach(c ->{
			calc.press(String.valueOf((char) c));
		}); 
		this.result = calc.getDisplay();
		return this;
	}

	protected BaseCalculatorTests atStart() {
		this.result = calc.getDisplay();
		return this;
	}

	protected void shouldShow(String expected) {
		assertEquals(expected, result);

	}

}
