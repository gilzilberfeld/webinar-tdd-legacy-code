"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalcTestUtils_1 = require("./CalcTestUtils");
let calc;
describe('characterization tests', function () {
    beforeEach('setup', function () {
        calc = new CalcTestUtils_1.CalcTestUtils();
    });
    it('successes', function () {
        calc.atStart_shouldShow("0");
        calc.pressing_should_show("C", "0");
        calc.pressing_should_show("3", "3");
        calc.pressing_should_show("3+", "3");
        calc.pressing_should_show("3+4", "4");
        calc.pressing_should_show("3+4+", "4");
        calc.pressing_should_show("3+4=", "7");
        calc.pressing_should_show("3C", "0");
        calc.pressing_should_show("6/3", "3");
        calc.pressing_should_show("6/0", "0");
        calc.pressing_should_show("6/0=", "Division By Zero Error");
    });
});
//# sourceMappingURL=CharacterizationTests.js.map