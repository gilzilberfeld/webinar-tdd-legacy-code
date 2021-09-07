package testingil.webinar.tddlegacycode.e3.addfunctionality.s2.test;

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
			handleOpKey(OperationType.Plus);
			break;
		case "/":
			handleOpKey(OperationType.Div);
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

	private void handleOpKey(OperationType operationType) {
		lastOperation = operationType;
		lastArgument = parseKeyNumber();
		newArgument = true;
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