using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E1.AddTests
{
    [TestClass]
    public class CharacterizationTests1
    {
        [TestMethod]
        public void CalculatorTests()
        {
            Calculator calc = new Calculator();
            Assert.AreEqual("0", calc.GetDisplay());

            calc.Press("3");
            Assert.AreEqual("3", calc.GetDisplay());
        }
    }
}
