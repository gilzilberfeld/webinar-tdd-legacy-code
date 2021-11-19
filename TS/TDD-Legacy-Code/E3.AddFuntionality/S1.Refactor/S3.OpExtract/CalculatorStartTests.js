"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalcTestUtils_1 = require("./CalcTestUtils");
let calc;
describe('at start', function () {
    beforeEach('setup', function () {
        calc = new CalcTestUtils_1.CalcTestUtils();
    });
    it('when pressing plus should show 0', function () {
        calc.pressing_should_show("+", "0");
    });
    it('when pressing div should show 0', function () {
        calc.pressing_should_show("/", "0");
    });
    it('when pressing equal should show 0', function () {
        calc.pressing_should_show("=", "0");
    });
});
//# sourceMappingURL=CalculatorStartTests.js.map