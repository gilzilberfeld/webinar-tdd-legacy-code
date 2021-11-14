using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E2.FixBug.S1.Test
{
    [TestClass]
    public class CharacterizationTests
    {
        private Calculator calc;
        private string result;

        [TestInitialize]
        public void Setup()
        {
            calc = new Calculator();
        }


        [TestMethod]
        public void Successes()
        {
            AtStart().ShouldShow("0");
            Pressing("C").ShouldShow("0");
            Pressing("3").ShouldShow("3");
            Pressing("3+").ShouldShow("3");
            Pressing("3+4").ShouldShow("4");
            Pressing("3+4+").ShouldShow("4");
            Pressing("3+4=").ShouldShow("7");
            Pressing("3C").ShouldShow("0");
            Pressing("6/3").ShouldShow("3");
            Pressing("6/0").ShouldShow("0");
            Pressing("6/0=").ShouldShow("Division By Zero Error");
        }

        private CharacterizationTests Pressing(string keys)
        {
            calc.Press("C");
            foreach (char c in keys)
            {
                calc.Press(c.ToString());
            };
            this.result = calc.GetDisplay();
            return this;
        }

        private CharacterizationTests AtStart()
        {
            this.result = calc.GetDisplay();
            return this;
        }

        private void ShouldShow(string expected)
        {
            Assert.AreEqual(expected, result);

        }
    }
}