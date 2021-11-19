"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcTestUtils = void 0;
const assert = require("assert");
const Calculator_1 = require("./Calculator");
class CalcTestUtils {
    constructor() {
        this.calc = new Calculator_1.Calculator();
    }
    ;
    pressing_should_show(keys, expected) {
        var result = "";
        this.calc.press("C");
        [...keys].forEach(c => this.calc.press(c));
        result = this.calc.getDisplay();
        assert.equal(result, expected);
    }
    atStart_shouldShow(expected) {
        var result = this.calc.getDisplay();
        assert.equal(result, "0");
    }
}
exports.CalcTestUtils = CalcTestUtils;
//# sourceMappingURL=CalcTestUtils.js.map