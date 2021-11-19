import assert = require('assert');
import { CalcTestUtils } from './CalcTestUtils';

let calc: CalcTestUtils;

describe('at start', function () {

    beforeEach('setup', function () {
        calc = new CalcTestUtils();
    });

    it('when pressing plus should show 0', function () {
        calc.pressing_should_show("+", "0");
    });

    it('when pressing div should show 0', function () {
        calc.pressing_should_show("/", "0");
    })

    it('when pressing equal should show 0', function () {
        calc.pressing_should_show("=", "0");
    });
});

