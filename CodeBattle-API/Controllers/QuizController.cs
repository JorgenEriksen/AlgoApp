using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("{id}")]
        public IActionResult GetQuizById()
        {
            return Ok();
        }
    }
}
