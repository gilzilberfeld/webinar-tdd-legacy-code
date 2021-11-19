"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalcTestUtils_1 = require("./CalcTestUtils");
let calc;
describe('bug fix tests', function () {
    beforeEach('setup', function () {
        calc = new CalcTestUtils_1.calc_test_utils();
    });
    it('when pressing plus at start should show 0', function () {
        calc.pressing_should_show("+", "0");
    });
    it('when pressing div at start should show 0', function () {
        calc.pressing_should_show("/", "0");
    });
    it('when pressing equal at start should show 0', function () {
        calc.pressing_should_show("=", "0");
    });
});
//# sourceMappingURL=BugFixTests.js.map