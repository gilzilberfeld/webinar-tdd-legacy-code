using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E2.FixBug.S3.BetterFix
{
    [TestClass]

    public class BugFixTests
    {
        private Calculator calc;
        private string result;

        [TestInitialize]
        public void Setup()
        {
            calc = new Calculator();
        }

        [TestMethod]
        public void When_pressing_operation_at_start_should_show_0()
        {
            Pressing("+").ShouldShow("0");
        }

        [TestMethod]
        public void When_pressing_div_at_start_should_show_0()
        {
            Pressing("/").ShouldShow("0");
        }

        [TestMethod]
        public void When_pressing_equal_at_start_should_show_0()
        {
            Pressing("=").ShouldShow("0");
        }

        private BugFixTests Pressing(string keys)
        {
            calc.Press("C");
            foreach (char c in keys)
            {
                calc.Press(c.ToString());
            };
            this.result = calc.GetDisplay();
            return this;
        }


        private void ShouldShow(string expected)
        {
            Assert.AreEqual(expected, result);

        }

    }
}
