using System;
using System.Runtime.CompilerServices;

namespace AcuteDocs.Client
{
    public class Page
    {
        private NavBarItem _currentNavBarItem;

        public void SetPage(string title, NavBarItem currentNavBarItem, bool isVersionSpecific)
        {
            Title = title;
            IsVersionSpecific = isVersionSpecific;
            CurrentNavBarItem = currentNavBarItem;
        }

        [IntrinsicProperty]
        public string Title { get; private set; }

        [IntrinsicProperty]
        public bool IsVersionSpecific { get; private set; } 

        private NavBarItem CurrentNavBarItem
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