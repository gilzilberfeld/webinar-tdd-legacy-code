import unittest
from calculator import Calculator


class base_calculator_tests(unittest.TestCase):

    def setUp(self):
        self.calc = Calculator()

    def pressing(self, keys):
        self.calc.press("C")
        for c in keys:
            self.calc.press(c)
        self.result = self.calc.get_display()
        return self

    def shouldShow(self, expected):
        self.assertEqual(expected, self.result)

    def atStart(self):
        self.result = self.calc.get_display()
        return self
