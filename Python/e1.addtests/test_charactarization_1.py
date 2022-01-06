import unittest
from calculator import Calculator


class CharacterizationTests1(unittest.TestCase):
    def test_calc(self):
        calc = Calculator()
        self.assertEqual("0", calc.get_display())
        calc.press("3")
        self.assertEqual("3", calc.get_display())


if __name__ == '__main__':
    unittest.main()
