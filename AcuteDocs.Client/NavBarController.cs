using System;
using Acute;

namespace AcuteDocs.Client
{
    public class NavBarController : Controller
    {
        private readonly Page _page;
        private readonly Versions _versions;

        public NavBarController(Page page, Versions versions)
        {
            _page = page;
            _versions = versions;
        }

        public override void Control(dynamic scope)
        {
            scope.Page = _page;
            scope.Versions = _versions.AllVersions;
            scope.SelectedVersion = _versions.SelectedVersion;

            scope.OnVersionSelected = (Action<string>) (version => { _versions.SelectedVersion = version; });

        }

    }
}