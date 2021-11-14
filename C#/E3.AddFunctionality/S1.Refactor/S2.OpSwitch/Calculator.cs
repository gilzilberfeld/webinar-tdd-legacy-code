using System;

namespace TDDLegacyCode.E3.AddFunctionality.S1.Refactor.S2.OpSwitch
{
    public class Calculator
    {
        string display = "";
        int lastArgument = 0;
        int result = 0;
        bool newArgument = false;
        bool shouldReset = true;

        OperationType lastOperation;


        public void Press(string key)
        {
            if (key.Equals("C"))
            {
                display = "";
                return;
            }
            switch (key)
            {
                case "+":
                    lastOperation = OperationType.Plus;
                    lastArgument = ParseKeyNumber();
                    newArgument = true;
                    break;
                case "/":
                    lastOperation = OperationType.Div;
                    lastArgument = ParseKeyNumber();
                    newArgument = true;
                    break;
                case "=":
                    int currentArgument = ParseKeyNumber();
                    if (lastOperation == OperationType.Plus)
                    {
                        display = (lastArgument + currentArgument).ToString();
                    }

                    if (lastOperation == OperationType.Div && currentArgument == 0)
                    {
                        display = "Division By Zero Error";
                    }
                    shouldReset = true;
                    break;
                default:
                    if (shouldReset)
                    {
                        display = "";
                        shouldReset = false;
                    }
                    if (newArgument)
                    {
                        display = "";
                        newArgument = false;
                    }
                    display += key;
                    break;
            }
        }

        private int ParseKeyNumber()
        {
            if (display.Equals(""))
                return 0;
            return Int32.Parse(display);
        }

        public String GetDisplay()
        {
            if (display.Equals(""))
                return "0";
            return display;
        }
    }

}

