import unittest
from base_calculator_test import base_calculator_tests


class test_calculator_at_start(base_calculator_tests):

    def test_when_pressing_operation_should_show_0(self):
        self.pressing("+").shouldShow("0")

    def test_when_pressing_div_should_show_0(self):
        self.pressing("/").shouldShow("0")

    def test_when_pressing_equal_should_show_0(self):
        self.pressing("=").shouldShow("0")



if __name__ == '__main__':
    unittest.main()
