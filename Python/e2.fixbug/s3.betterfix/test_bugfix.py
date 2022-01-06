import unittest
from calculator import Calculator


class test_bugfix(unittest.TestCase):

    def setUp(self):
        self.calc = Calculator()

    def test_when_pressing_operation_at_start_should_show_0(self):
        self.pressing("+").shouldShow("0")

    def test_when_pressing_div_at_start_should_show_0(self):
        self.pressing("/").shouldShow("0")

    def test_when_pressing_equal_at_start_should_show_0(self):
        self.pressing("=").shouldShow("0")

    def pressing(self, keys):
        self.calc.press("C")
        for c in keys:
            self.calc.press(c)
        self.result = self.calc.get_display()
        return self

    def shouldShow(self, expected):
        self.assertEqual(expected, self.result)


if __name__ == '__main__':
    unittest.main()
