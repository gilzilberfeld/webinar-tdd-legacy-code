import unittest
from base_calculator_test import base_calculator_tests


class MyTestCase(base_calculator_tests):
    def test_number_after_minus_should_still_display(self):
        self.pressing("9-").shouldShow("9");


if __name__ == '__main__':
    unittest.main()
