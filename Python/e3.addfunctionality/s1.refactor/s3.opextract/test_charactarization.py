import unittest
from base_calculator_test import base_calculator_tests


class CharacterizationTests(base_calculator_tests):

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


if __name__ == '__main__':
    unittest.main()
