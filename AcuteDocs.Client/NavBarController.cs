using Acute;

namespace AcuteDocs.Client
{
    public class NavBarController : Controller
    {
        private readonly Page _page;

        public NavBarController(Page page)
        {
            _page = page;
        }

        public override void Control(dynamic scope)
        {
            scope.Page = _page;
        }
    }
}