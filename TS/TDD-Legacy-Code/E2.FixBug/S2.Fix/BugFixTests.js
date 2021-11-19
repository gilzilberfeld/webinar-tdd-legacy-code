"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const Calculator_1 = require("./Calculator");
let calc;
let result = "";
describe('bug fix tests', function () {
    beforeEach('setup', function () {
        calc = new Calculator_1.Calculator();
    });
    it('when pressing operation at start should show 0', function () {
        pressing_should_show("+", "0");
    });
});
function pressing_should_show(keys, expected) {
    console.log("keys sent: " + keys);
    calc.press("C");
    console.log("display after reset: " + calc.getDisplay());
    [...keys].forEach(c => calc.press(c));
    console.log("display after press: " + calc.getDisplay());
    result = calc.getDisplay();
    assert.equal(result, expected);
}
//# sourceMappingURL=BugFixTests.js.map