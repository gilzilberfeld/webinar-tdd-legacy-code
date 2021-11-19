import assert = require('assert');
import { Calculator } from './Calculator';


let calc: Calculator;
let result: string = "";
describe('bug fix tests', function () {

    beforeEach('setup', function () {
        calc = new Calculator();
    });

    it('when pressing operation at start should show 0', function () {
        pressing_should_show("+", "0");
    })
});

function pressing_should_show(keys: string, expected: string) {
    calc.press("C");
    [...keys].forEach(c =>
        calc.press(c));
    result = calc.getDisplay();
    assert.equal(result, expected);
}
