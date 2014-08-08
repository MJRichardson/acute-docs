using Acute;

namespace AcuteDocs.Client
{
    public class PageController : Acute.Controller
    {
        public PageController(Scope scope, Page page)
        {
            scope.Model.Page = page;
        }

    }
}