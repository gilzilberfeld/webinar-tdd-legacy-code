"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType[OperationType["Plus"] = 0] = "Plus";
    OperationType[OperationType["Div"] = 1] = "Div";
    OperationType[OperationType["Minus"] = 2] = "Minus";
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
        if (key == "C") {
            this.display = "";
            return;
        }
        switch (key) {
            case "+":
                this.handleOpKey(OperationType.Plus);
                break;
            case "/":
                this.handleOpKey(OperationType.Div);
                break;
            case "-":
                this.handleOpKey(OperationType.Minus);
                break;
            case "=":
                this.handleEquals();
                break;
            default:
                this.handleNumbers(key);
                break;
        }
    }
    handleNumbers(key) {
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
    handleEquals() {
        let currentArgument = this.parseKeyNumber();
        if (this.lastOperation == OperationType.Plus) {
            this.display = (this.lastArgument + currentArgument).toString();
        }
        if (this.lastOperation == OperationType.Div && currentArgument == 0) {
            this.display = "Division By Zero Error";
        }
        this.shouldReset = true;
    }
    handleOpKey(op) {
        this.lastOperation = op;
        this.lastArgument = this.parseKeyNumber();
        this.newArgument = true;
    }
    parseKeyNumber() {
        if (this.display == "")
            return 0;
        return parseInt(this.display);
    }
    getDisplay() {
        if (this.display == "")
            return "0";
        return this.display;
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map