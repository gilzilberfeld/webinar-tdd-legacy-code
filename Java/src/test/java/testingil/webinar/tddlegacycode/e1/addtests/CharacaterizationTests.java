package testingil.webinar.tddlegacycode.e1.addtests;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CharacaterizationTests {


	@Test
	void calc_tests() {
		Calculator calc = new Calculator();
		assertEquals("0", calc.getDisplay());
		
		calc.press("3");
		assertEquals("3", calc.getDisplay());
	}

}
