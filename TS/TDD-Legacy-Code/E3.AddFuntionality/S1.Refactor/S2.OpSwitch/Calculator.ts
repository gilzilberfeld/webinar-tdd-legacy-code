
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
        if (key == "C") {
            this.display = "";
            return;
        }
        switch (key) {
            case "+":
                this.lastOperation = OperationType.Plus;
                this.lastArgument = this.parseKeyNumber();
                this.newArgument = true;
                break;
            case "/":
                this.lastOperation = OperationType.Div;
                this.lastArgument = this.parseKeyNumber();
                this.newArgument = true;
                break;
            case "=":
                let currentArgument = this.parseKeyNumber();
                if (this.lastOperation == OperationType.Plus) {
                    this.display = (this.lastArgument + currentArgument).toString();
                }
                if (this.lastOperation == OperationType.Div && currentArgument == 0) {
                    this.display = "Division By Zero Error";
                }
                this.shouldReset = true;
                break;
            default:
                if (this.shouldReset) {
                    this.display = "";
                    this.shouldReset = false;
                }
                if (this.newArgument) {
                    this.display = "";
                    this.newArgument = false;
                }
                this.display += key;
                break;
        }
    }

    parseKeyNumber(): number {
        if (this.display == "")
            return 0;
        return parseInt(this.display);
    }

    getDisplay(): string {
        if (this.display == "")
            return "0";
        return this.display;
    }
}
