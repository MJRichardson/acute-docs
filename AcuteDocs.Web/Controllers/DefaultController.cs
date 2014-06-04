using System.Web.Mvc;

namespace AcuteDocs.Web.Controllers
{
    public class DefaultController : Controller
    {
        public ActionResult Shell()
        {
            return File(Server.MapPath("/index.html"), "text/html");
        }
    }
}