namespace e0 {

	export enum OperationType {
		Plus,
		Div
	}

	export class Calculator {
		display: string = "";
		lastArgument = 0;
		result = 0;
		newArgument = false;
		shouldReset = true;

		lastOperation: OperationType;

		press(key: string) {
			if (key == "C")
				this.display = "";
			else {
				if (key == "+") {
					this.lastOperation = OperationType.Plus;
					this.lastArgument = Number(this.display);
					this.newArgument = true;
				}
				else {
					if (key == "/") {
						this.lastOperation = OperationType.Div;
						this.lastArgument = Number(this.display);
						this.newArgument = true;
					}
					else if (key == "=") {
						let currentArgument = Number(this.display);
						if (this.lastOperation == OperationType.Plus) {
							this.display = (this.lastArgument + currentArgument).toString();
						}
						if (this.lastOperation == OperationType.Div && currentArgument == 0) {
							this.display = "Division By Zero Error";
						}
						this.shouldReset = true;
					}
					else {
						if (this.shouldReset) {
							this.display = "";
							this.shouldReset = false;
						}
						if (this.newArgument) {
							this.display = "";
							this.newArgument = false;
						}
						this.display += key;
					}
				}
			}
		}

		getDisplay(): string {
			if (this.display == "")
				return "0";
			return this.display;
		}
	}
}