﻿using Acute;

namespace AcuteDocs.Client
{
    public class HomeController : Controller
    {
        private readonly Page _page;

        public HomeController(Page page)
        {
            _page = page;
        }

        public override void Control(dynamic scope)
        {
            _page.SetPage("Acute", NavBarItem.Home, false );
        }
    }
}