using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TDDLegacyCode.E3.AddFunctionality.S1.Refactor.S1.Guard
{
    [TestClass]
    public class CharacterizationTests : BaseCalculatorTests
    {

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

    }
}