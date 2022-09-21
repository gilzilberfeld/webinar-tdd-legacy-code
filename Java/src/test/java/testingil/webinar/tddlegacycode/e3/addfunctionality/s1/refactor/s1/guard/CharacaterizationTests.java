package testingil.webinar.tddlegacycode.e3.addfunctionality.s1.refactor.s1.guard;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CharacaterizationTests extends BaseCalculatorTests{

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


}
