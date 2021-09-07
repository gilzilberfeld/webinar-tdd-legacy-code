package testingil.webinar.tddlegacycode.e0.start;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class theTest {

	private Calculator calc;

	@BeforeEach
	public void setup(){
		calc = new Calculator();
	}

	@Test
	void successes() {
		assertEquals("0", calc.getDisplay());
		press_and_check("3", "3");
		press_and_check("3+", "3");
		press_and_check("3+4", "4");
		press_and_check("3+4+", "4");
		press_and_check("3+4=", "7");
		press_and_check("3C", "0");
		press_and_check("6/3", "3");
		press_and_check("6/0", "0");
		press_and_check("6/0=", "Division By Zero Error");
	}

	@Test
	void failures() {
		press_and_check("+", "0");
		press_and_check("03", "3");
		press_and_check("6/3=", "2");
		press_and_check("X", "0");
		press_and_check("%", "0");
	}
	
	@Test
	void works_but_should_it() {
		press_and_check("3++", "3");
		
	}
	private void press_and_check(String param, String expected) {
		param.chars().forEach(c ->{
			calc.press(String.valueOf((char) c));
		}); 
		assertEquals(expected, calc.getDisplay());
		calc.press("C");
	}

}
