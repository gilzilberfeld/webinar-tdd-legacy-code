using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E2.FixBug.S5.RefactorTest
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
