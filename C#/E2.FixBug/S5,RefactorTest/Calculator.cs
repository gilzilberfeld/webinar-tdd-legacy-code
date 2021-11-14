﻿using System;

namespace TDDLegacyCode.E2.FixBug.S5.RefactorTest
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
                display = "";
            else
            {
                if (key.Equals("+"))
                {

                    lastOperation = OperationType.Plus;
                    lastArgument = ParseKeyNumber();
                    newArgument = true;
                }
                else
                {
                    if (key.Equals("/"))
                    {
                        lastOperation = OperationType.Div;
                        lastArgument = ParseKeyNumber();
                        newArgument = true;
                    }
                    else if (key.Equals("="))
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
                    else
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
                }
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

