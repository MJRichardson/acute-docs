using System;

namespace AcuteDocs.Client
{
    public class Page
    {
        private NavBarItem _currentNavBarItem;

        public string Title { get; set; }

        public NavBarItem CurrentNavBarItem
        {
            get { return _currentNavBarItem; }
            set
            {
                _currentNavBarItem = value;
                switch (value)
                {
                    case NavBarItem.Home:
                         CurrentNavBarItemScriptName = "home";
                        break;

                    case NavBarItem.Setup:
                        CurrentNavBarItemScriptName = "setup";
                        break;

                    case NavBarItem.Learn:
                        CurrentNavBarItemScriptName = "learn";
                        break;

                    default: 
                        throw new Exception("Unexpected nav-bar item"); 
                    
                }
            }
        }

        public string CurrentNavBarItemScriptName;

    }
}