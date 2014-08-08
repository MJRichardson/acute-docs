using Acute;

namespace AcuteDocs.Client
{
    public class SetupController : Controller
    {

        public SetupController(Page page)
        {
            page.SetPage("Setup - Acute", NavBarItem.Setup, true );
        }

    }
}