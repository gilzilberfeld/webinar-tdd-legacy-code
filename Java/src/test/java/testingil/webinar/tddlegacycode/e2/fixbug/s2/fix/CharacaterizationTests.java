package testingil.webinar.tddlegacycode.e2.fixbug.s2.fix;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CharacaterizationTests {

	private Calculator calc;
	private String result;
	
	@BeforeEach
	public void setup(){
		calc = new Calculator();
	}

	@Test
	void successes() {
		atStart().shouldShow("0");
		pressing("C").shouldShow("0");
		pressing("3").shouldShow("3");
		pressing("3+").shouldShow("3");
		pressing("3+4").shouldShow("4");
		pressing("3+4+").shouldShow("4");
		pressing("3+4=").shouldShow("7");
		pressing("3C").shouldShow("0");
		pressing("6/3").shouldShow("3");
		pressing("6/0").shouldShow("0");
		pressing("6/0=").shouldShow("Division By Zero Error");
	}

	private CharacaterizationTests pressing(String keys) {
		calc.press("C");
		keys.chars().forEach(c ->{
			calc.press(String.valueOf((char) c));
		}); 
		this.result = calc.getDisplay();
		return this;
	}

	private CharacaterizationTests atStart() {
		this.result = calc.getDisplay();
		return this;
	}

	private void shouldShow(String expected) {
		assertEquals(expected, result);

	}

}
