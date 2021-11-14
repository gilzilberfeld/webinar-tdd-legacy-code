using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E3.AddFunctionality.S1.Refactor.S1.Guard
{
    [TestClass]

    public class CalculatorStartTests : BaseCalculatorTests
    {
        [TestMethod]
        public void When_pressing_operation_should_show_0()
        {
            Pressing("+").ShouldShow("0");
        }

        [TestMethod]
        public void When_pressing_div_should_show_0()
        {
            Pressing("/").ShouldShow("0");
        }

        [TestMethod]
        public void When_pressing_equal_should_show_0()
        {
            Pressing("=").ShouldShow("0");
        }
    }
}
