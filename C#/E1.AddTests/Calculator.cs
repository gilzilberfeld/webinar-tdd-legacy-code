﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDDLegacyCode.E1.AddTests
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
					lastArgument = Int32.Parse(display);
					newArgument = true;
				}
				else
				{
					if (key.Equals("/"))
					{
						lastOperation = OperationType.Div;
						lastArgument = Int32.Parse(display);
						newArgument = true;
					}
					else if (key.Equals("="))
					{
						int currentArgument = Int32.Parse(display);
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

		public String GetDisplay()
		{
			if (display.Equals(""))
				return "0";
			return display;
		}
	}

}

