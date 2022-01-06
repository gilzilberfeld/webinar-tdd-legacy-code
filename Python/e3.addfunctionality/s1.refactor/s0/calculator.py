from enum import Enum


class OperationType(Enum):
    Plus = 1
    Div = 2


class Calculator:
    display = ""
    lastArgument = 0
    result = 0
    newArgument = False
    shouldReset = True
    lastOperation = OperationType.Plus

    def press(self, key):
        if key == "C":
            self.display = ""
        else:
            if key == "+":
                self.lastOperation = OperationType.Plus
                self.lastArgument = self.parseKeyNumber()
                self.newArgument = True
            else:
                if key == "/":
                    self.lastOperation = OperationType.Div
                    self.lastArgument = self.parseKeyNumber()
                    self.newArgument = True
                else:
                    if key == "=":
                        currentArgument = self.parseKeyNumber()
                        if self.lastOperation == OperationType.Plus:
                            self.display = str(self.lastArgument + currentArgument)
                        if self.lastOperation == OperationType.Div and currentArgument == 0:
                            self.display = "Division By Zero Error"
                        self.shouldReset = True
                    else:
                        if self.shouldReset:
                            self.display = ""
                            self.shouldReset = False
                        if self.newArgument:
                            self.display = ""
                            self.newArgument = False
                        self.display += key

    def get_display(self):
        if self.display == "":
            return "0"
        return self.display

    def parseKeyNumber(self):
        if self.display == "":
            return 0
        return int(self.display)
