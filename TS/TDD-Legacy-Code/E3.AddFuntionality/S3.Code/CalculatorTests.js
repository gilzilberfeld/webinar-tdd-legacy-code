"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalcTestUtils_1 = require("./CalcTestUtils");
let calc;
describe('calculator tests', function () {
    beforeEach('setup', function () {
        calc = new CalcTestUtils_1.CalcTestUtils();
    });
    it('number after minus should display just the number', function () {
        calc.pressing_should_show("9-", "9");
    });
});
//# sourceMappingURL=CalculatorTests.js.map