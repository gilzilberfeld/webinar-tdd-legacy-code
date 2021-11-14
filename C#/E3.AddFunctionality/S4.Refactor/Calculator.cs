using System;

namespace TDDLegacyCode.E3.AddFunctionality.S4.Refactor
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
                    HandleOpKey(OperationType.Plus);
                    break;
                case "-":
                    HandleOpKey(OperationType.Minus);
                    break;
                case "/":
                    HandleOpKey(OperationType.Div);
                    break;
                case "=":
                    HandleEquals(); 
                    break;
                default:
                    HandleNumbers(key); 
                    break;
            }
        }

        private void HandleNumbers(string key)
        {
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
        }

        private void HandleEquals()
        {
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
        }

        private void HandleOpKey(OperationType op)
        {
            lastOperation = op;
            lastArgument = ParseKeyNumber();
            newArgument = true;
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

