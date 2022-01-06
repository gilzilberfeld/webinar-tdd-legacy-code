from enum import Enum


class OperationType(Enum):
    Plus = 1
    Div = 2
    Minus = 3


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
            return

        match key:
            case "+":
                self.handleOpKey(OperationType.Plus)
            case "/":
                self.handleOpKey(OperationType.Div)
            case "-":
                self.handleOpKey(OperationType.Minus)
            case "=":
                self.handle_equals()
            case _:
                self.handle_number(key)

    def handle_number(self, key):
        if self.shouldReset:
            self.display = ""
            self.shouldReset = False
        if self.newArgument:
            self.display = ""
            self.newArgument = False
        self.display += key

    def handle_equals(self):
        currentArgument = self.parseKeyNumber()
        if self.lastOperation == OperationType.Plus:
            self.display = str(self.lastArgument + currentArgument)
        if self.lastOperation == OperationType.Div and currentArgument == 0:
            self.display = "Division By Zero Error"
        self.shouldReset = True

    def get_display(self):
        if self.display == "":
            return "0"
        return self.display

    def parseKeyNumber(self):
        if self.display == "":
            return 0
        return int(self.display)

    def handleOpKey(self, operationType):
        self.lastOperation = operationType
        self.lastArgument = self.parseKeyNumber()
        self.newArgument = True
