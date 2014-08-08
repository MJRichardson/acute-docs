using Acute;

namespace AcuteDocs.Client
{
    public class ConceptsController : Controller
    {

        public ConceptsController(Page page)
        {
            page.SetPage("Concepts - Acute", NavBarItem.Learn, false );
        }

    }
}