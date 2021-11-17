import assert = require('assert');
import { Calculator } from './Calculator';

describe('characterization test', function () {

    it('calculator tests', function () {
        let calc = new Calculator();
        assert.equal("0", calc.getDisplay());

        calc.press("3");
        assert.equal("3", calc.getDisplay());
    });
});

