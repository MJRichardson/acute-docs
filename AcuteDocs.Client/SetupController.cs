using Acute;

namespace AcuteDocs.Client
{
    public class SetupController : Controller
    {
        private readonly Page _page;

        public SetupController(Page page)
        {
            _page = page;
        }

        public override void Control(dynamic scope)
        {
            _page.Title = "Setup - Acute";
            _page.CurrentNavBarItem = NavBarItem.Setup;
        }
    }
}