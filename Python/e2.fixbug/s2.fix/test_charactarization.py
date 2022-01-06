import unittest
from calculator import Calculator


class CharacterizationTests(unittest.TestCase):
    calc: Calculator

    def setUp(self):
        self.calc = Calculator()

    def test_successes(self):
        self.atStart().shouldShow("0")
        self.pressing("C").shouldShow("0")
        self.pressing("3").shouldShow("3")
        self.pressing("3+").shouldShow("3")
        self.pressing("3+").shouldShow("3")
        self.pressing("3+4").shouldShow("4")
        self.pressing("3+4+").shouldShow("4")
        self.pressing("3+4=").shouldShow("7")
        self.pressing("3C").shouldShow("0")
        self.pressing("6/3").shouldShow("3")
        self.pressing("6/0").shouldShow("0")
        self.pressing("6/0=").shouldShow("Division By Zero Error")

    def atStart(self):
        self.result = self.calc.get_display()
        return self

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
