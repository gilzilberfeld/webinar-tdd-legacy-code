"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const Calculator_1 = require("./Calculator");
/// <reference path="./Calculator.ts" />
describe('characterization test', function () {
    it('calculator tests', function () {
        let calc = new Calculator_1.Calculator();
        assert.equal("0", calc.getDisplay());
        calc.press("3");
        assert.equal("3", calc.getDisplay());
    });
});
//# sourceMappingURL=TheTests.js.map