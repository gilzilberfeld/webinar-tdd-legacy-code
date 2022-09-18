package testingil.webinar.tddlegacycode.e3.addfunctionality.s1.refactor.s2.opswitch;

public class Calculator {
	String display = "";
	int lastArgument = 0;
	int result = 0;
	Boolean newArgument = false;
	Boolean shouldReset = true;

	OperationType lastOperation;

	public void press(String key) {
		if (key.equals("C")) {
			display = "";
			return;
		}
		switch (key) {
		case "+":
			lastOperation = OperationType.Plus;
			lastArgument = parseKeyNumber();
			newArgument = true;
			break;
		case "/":
			lastOperation = OperationType.Div;
			lastArgument = parseKeyNumber();
			newArgument = true;
			break;
		case "=":
			int currentArgument = parseKeyNumber();
			if (lastOperation == OperationType.Plus) {
				display = Integer.toString(lastArgument + currentArgument);
			}
			if (lastOperation == OperationType.Div && currentArgument == 0) {
				display = "Division By Zero Error";
			}
			shouldReset = true;
			break;
		default:
			if (shouldReset) {
				display = "";
				shouldReset = false;
			}
			if (newArgument) {
				display = "";
				newArgument = false;
			}
			display += key;
			break;
		}
	}

	private int parseKeyNumber() {
		if (display.equals(""))
			return 0;
		return Integer.parseInt(display);
	}

	public String getDisplay() {
		if (display.equals(""))
			return "0";
		return display;
	}

}