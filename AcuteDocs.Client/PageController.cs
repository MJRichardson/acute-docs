namespace AcuteDocs.Client
{
    public class PageController : Acute.Controller
    {
        private readonly Page _page;

        public PageController(Page page)
        {
            _page = page;
        }

        public override void Control(dynamic scope)
        {
            scope.Page = _page;
        }
    }
}