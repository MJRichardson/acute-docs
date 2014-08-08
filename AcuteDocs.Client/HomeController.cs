using Acute;

namespace AcuteDocs.Client
{
    public class HomeController : Controller
    {
        public HomeController(Page page)
        {
            page.SetPage("Acute", NavBarItem.Home, false );
        }

    }
}