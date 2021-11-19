import assert = require('assert');
import { Calculator } from './Calculator';


let calc: Calculator;
let result: string = "";
describe('characterization tests', function () {

    beforeEach('setup', function () {
        calc = new Calculator();
    });

    it('successes', function () {
        atStart_shouldShow("0");
        pressing_should_show("C", "0");
        pressing_should_show("3","3");
        pressing_should_show("3+","3");
        pressing_should_show("3+4","4");
        pressing_should_show("3+4+","4");
        pressing_should_show("3+4=","7");
        pressing_should_show("3C","0");
        pressing_should_show("6/3","3");
        pressing_should_show("6/0","0");
        pressing_should_show("6/0=","Division By Zero Error");
    });


});
function atStart_shouldShow(expected: string) {
    result = calc.getDisplay();
    assert.equal(result, "0");
}

function pressing_should_show(keys: string, expected: string) {
    calc.press("C");
    [...keys].forEach(c =>
        calc.press(c));
    result = calc.getDisplay();
    assert.equal(result, expected);
}
