var e0;
(function (e0) {
    let OperationType;
    (function (OperationType) {
        OperationType[OperationType["Plus"] = 0] = "Plus";
        OperationType[OperationType["Div"] = 1] = "Div";
    })(OperationType = e0.OperationType || (e0.OperationType = {}));
    class Calculator {
        constructor() {
            this.display = "";
            this.lastArgument = 0;
            this.result = 0;
            this.newArgument = false;
            this.shouldReset = true;
        }
        press(key) {
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
        getDisplay() {
            if (this.display == "")
                return "0";
            return this.display;
        }
    }
    e0.Calculator = Calculator;
})(e0 || (e0 = {}));
//# sourceMappingURL=Calculator.js.map