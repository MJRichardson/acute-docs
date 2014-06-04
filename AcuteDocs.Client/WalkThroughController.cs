using Acute;

namespace AcuteDocs.Client
{
    public class WalkThroughController : Controller
    {
        private readonly Page _page;

        public WalkThroughController(Page page)
        {
            _page = page;
        }

        public override void Control(dynamic scope)
        {
            _page.Title = "WalkThrough - Acute";
            _page.CurrentNavBarItem = NavBarItem.Learn;
        }
    }
}