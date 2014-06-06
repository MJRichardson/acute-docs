namespace AcuteDocs.Client
{
    public class Versions
    {
        public const string DefaultVersion = "v0.1";

        public string SelectedVersion = DefaultVersion;

         public string[] AllVersions {
             get
             {
                 return new[] {"v0.2", "v0.1"}; 
             }
         }
    }
}