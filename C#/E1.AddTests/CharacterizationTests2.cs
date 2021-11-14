using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E1.AddTests
{
    [TestClass]
    public class CharacterizationTests2
    {
        private Calculator calc;
        private string result;

        [TestInitialize]
        public void Setup()
        {
            calc = new Calculator();
        }


        [TestMethod]
        public void successes()
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

        [TestMethod]
        public void Failures()
        {
            Pressing("+").ShouldShow("0");
            Pressing("03").ShouldShow("3");
            Pressing("6/3=").ShouldShow("2");
            Pressing("X").ShouldShow("0");
            Pressing("%").ShouldShow("0");
        }

        [TestMethod]
        public void works_but_should_it()
        {
            Pressing("3++").ShouldShow("3");
        }

        private CharacterizationTests2 Pressing(string keys)
        {
            calc.Press("C");
            foreach (char c in keys)
            {
                calc.Press(c.ToString());
            };
            this.result = calc.GetDisplay();
            return this;
        }

        private CharacterizationTests2 AtStart()
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