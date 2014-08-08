using Acute;

namespace AcuteDocs.Client
{
    public class WalkThroughController : Controller
    {
        public WalkThroughController(Page page)
        {
            page.SetPage("WalkThrough - Acute", NavBarItem.Learn, false );
        }

    }
}