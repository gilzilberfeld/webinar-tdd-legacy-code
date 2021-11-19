import assert = require('assert');
import { CalcTestUtils } from './CalcTestUtils';


let calc: CalcTestUtils;
describe('characterization tests', function () {

    beforeEach('setup', function () {
        calc = new CalcTestUtils();
    });

    it('successes', function () {
        calc.atStart_shouldShow("0");
        calc.pressing_should_show("C", "0");
        calc.pressing_should_show("3","3");
        calc.pressing_should_show("3+","3");
        calc.pressing_should_show("3+4","4");
        calc.pressing_should_show("3+4+","4");
        calc.pressing_should_show("3+4=","7");
        calc.pressing_should_show("3C","0");
        calc.pressing_should_show("6/3","3");
        calc.pressing_should_show("6/0","0");
        calc.pressing_should_show("6/0=","Division By Zero Error");
    });

});
