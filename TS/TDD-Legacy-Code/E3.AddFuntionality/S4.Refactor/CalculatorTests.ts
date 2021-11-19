import assert = require('assert');
import { CalcTestUtils } from './CalcTestUtils';

let calc: CalcTestUtils;

describe('calculator tests', function () {

    beforeEach('setup', function () {
        calc = new CalcTestUtils();
    });

    it('number after minus should display just the number', function () {
        calc.pressing_should_show("9-", "9");
    });
});

