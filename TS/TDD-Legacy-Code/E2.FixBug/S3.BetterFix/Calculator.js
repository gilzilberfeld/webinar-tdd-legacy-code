"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType[OperationType["Plus"] = 0] = "Plus";
    OperationType[OperationType["Div"] = 1] = "Div";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
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
                if (this.display != "") {
                    this.lastOperation = OperationType.Plus;
                    this.lastArgument = parseInt(this.display);
                    if (isNaN(this.lastArgument))
                        throw new Error("error");
                    this.newArgument = true;
                }
            }
            else {
                if (key == "/") {
                    if (this.display != "") {
                        this.lastOperation = OperationType.Div;
                        this.lastArgument = parseInt(this.display);
                        if (isNaN(this.lastArgument))
                            throw new Error("error");
                        this.newArgument = true;
                    }
                }
                else if (key == "=") {
                    if (this.display != "") {
                        let currentArgument = parseInt(this.display);
                        if (this.lastOperation == OperationType.Plus) {
                            this.display = (this.lastArgument + currentArgument).toString();
                        }
                        if (this.lastOperation == OperationType.Div && currentArgument == 0) {
                            this.display = "Division By Zero Error";
                        }
                        this.shouldReset = true;
                    }
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
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map