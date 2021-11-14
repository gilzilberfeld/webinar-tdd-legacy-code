using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDDLegacyCode.E3.AddFunctionality.S2.AddTest
{
    [TestClass]
    public class CalculatorTests : BaseCalculatorTests
    {
        [TestMethod]
        public void Number_after_minus_should_still_display()
        {
            Pressing("9-").ShouldShow("9");
        }
    }
}
