﻿using Acute;

namespace AcuteDocs.Client
{
    public class ConceptsController : Controller
    {
        private readonly Page _page;

        public ConceptsController(Page page)
        {
            _page = page;
        }

        public override void Control(dynamic scope)
        {
            _page.Title = "Concepts - Acute";
            _page.CurrentNavBarItem = NavBarItem.Learn;
        }
    }
}