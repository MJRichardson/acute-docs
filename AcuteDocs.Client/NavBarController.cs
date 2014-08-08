using System;
using Acute;

namespace AcuteDocs.Client
{
    public class NavBarController : Controller
    {

        public NavBarController(Scope scope, Page page, Versions versions)
        {
            scope.Model.Page = page;
            scope.Model.Versions = versions.AllVersions;
            scope.Model.SelectedVersion = versions.SelectedVersion;

            scope.Model.OnVersionSelected = (Action<string>) (version =>
                {
                    versions.SelectedVersion = version;
                    scope.Model.SelectedVersion = version;
                });
        }

    }
}