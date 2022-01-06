from enum import Enum

OperationType = Enum('Plus', 'Div')


class Calculator:
    display = ""
    lastArgument = 0
    result = 0
    newArgument = False
    shouldReset = True

    lastOperation: OperationType

    def press(self, key):
        if key == "C":
            self.display = ""
        else:
            if key == "+":
                self.lastOperation = OperationType.Plus
                self.lastArgument = int(self.display)
                self.newArgument = True
            else:
                if key == "/":
                    self.lastOperation = OperationType.Div
                    self.lastArgument = int(self.display)
                    self.newArgument = True
                else:
                    if key == "=":
                        currentArgument = int(self.display)
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
