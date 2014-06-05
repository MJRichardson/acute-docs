using Acute;

namespace AcuteDocs.Client
{
    public class App : Acute.App
    {
        public App()
        {
           Service<Page>(); 
        }

        protected override void ConfigureRoutes(RouteProvider routeProvider)
        {
            routeProvider.When("/setup", new RouteConfig<SetupController> {TemplateUrl = "templates/setup.html"});
            routeProvider.When("/concepts", new RouteConfig<ConceptsController> {TemplateUrl = "templates/concepts.html"});
            routeProvider.When("/walk-through", new RouteConfig<WalkThroughController> {TemplateUrl = "templates/walk-through.html"});
            routeProvider.Otherwise(new RouteConfig<HomeController> {TemplateUrl = "templates/home.html"});
        }
    }

}