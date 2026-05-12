using Microsoft.AspNetCore.Mvc;

namespace BookStoreApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}