using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDDLegacyCode.E3.AddFunctionality.S1.Refactor.S1.Guard
{
    public class BaseCalculatorTests
    {
        protected Calculator calc;
        protected string result;

        [TestInitialize]
        public void Setup()
        {
            calc = new Calculator();
        }

        protected BaseCalculatorTests Pressing(string keys)
        {
            calc.Press("C");
            foreach (char c in keys)
            {
                calc.Press(c.ToString());
            };
            this.result = calc.GetDisplay();
            return this;
        }

        protected BaseCalculatorTests AtStart()
        {
            this.result = calc.GetDisplay();
            return this;
        }

        public void ShouldShow(string expected)
        {
            Assert.AreEqual(expected, result);

        }

    }
}
