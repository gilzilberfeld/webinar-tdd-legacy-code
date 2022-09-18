package testingil.webinar.tddlegacycode.e2.fixbug.s5.refactortest;

public class Calculator {
	String display = "";
	int lastArgument = 0;
	int result = 0; 
	Boolean newArgument = false;
	Boolean shouldReset = true;
	
	OperationType lastOperation;

	
	public void press(String key) {
		if (key.equals("C"))
			display = "";
		else {
			if (key.equals("+")) {
					lastOperation = OperationType.Plus;	
					lastArgument =  parseKeyNumber();
					newArgument = true;
				} else {
				if (key.equals("/")) {
					lastOperation = OperationType.Div;	
					lastArgument =  parseKeyNumber();
					newArgument = true;
					}
				else if (key.equals("=")) {
					int currentArgument = parseKeyNumber();
					if (lastOperation == OperationType.Plus) {
						display = Integer.toString(lastArgument + currentArgument);
					}
					if (lastOperation == OperationType.Div && currentArgument == 0) {
						display = "Division By Zero Error";
					}
					shouldReset = true;
				}
				else {
					if (shouldReset) {
						display = "";
						shouldReset = false;
					}
					if (newArgument) {
						display ="";
						newArgument = false;
					}
					display += key;
				}
			}
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