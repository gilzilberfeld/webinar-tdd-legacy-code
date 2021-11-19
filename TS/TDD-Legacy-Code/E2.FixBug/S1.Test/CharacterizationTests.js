"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const Calculator_1 = require("./Calculator");
let calc;
let result = "";
describe('characterization tests', function () {
    beforeEach('setup', function () {
        calc = new Calculator_1.Calculator();
    });
    it('successes', function () {
        atStart_shouldShow("0");
        pressing_should_show("C", "0");
        pressing_should_show("3", "3");
        pressing_should_show("3+", "3");
        pressing_should_show("3+4", "4");
        pressing_should_show("3+4+", "4");
        pressing_should_show("3+4=", "7");
        pressing_should_show("3C", "0");
        pressing_should_show("6/3", "3");
        pressing_should_show("6/0", "0");
        pressing_should_show("6/0=", "Division By Zero Error");
    });
});
function atStart_shouldShow(expected) {
    result = calc.getDisplay();
    assert.equal(result, "0");
}
function pressing_should_show(keys, expected) {
    calc.press("C");
    [...keys].forEach(c => calc.press(c));
    result = calc.getDisplay();
    assert.equal(result, expected);
}
//# sourceMappingURL=CharacterizationTests.js.map