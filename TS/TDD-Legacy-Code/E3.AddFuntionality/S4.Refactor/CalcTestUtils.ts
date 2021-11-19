import assert = require('assert');
import { Calculator } from './Calculator';



export class CalcTestUtils {
    calc: Calculator;

    constructor() {
        this.calc = new Calculator();
    };


    pressing_should_show(keys: string, expected: string) {
        var result = "";

        this.calc.press("C");
        [...keys].forEach(c =>
            this.calc.press(c));
        result = this.calc.getDisplay();
        assert.equal(result, expected);
    }

    atStart_shouldShow(expected: string) {
        var result = this.calc.getDisplay();
        assert.equal(result, "0");
    }
}

