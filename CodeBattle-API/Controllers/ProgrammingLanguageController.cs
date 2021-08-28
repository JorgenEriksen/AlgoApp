using CodeBattle_API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgrammingLanguageController : Controller
    {
        public ProgrammingLanguageService _programmingLanguageService;
        public ProgrammingLanguageController(ProgrammingLanguageService programmingLanguageService)
        {
            _programmingLanguageService = programmingLanguageService;
        }

        [HttpGet]
        public IActionResult GetAllProgrammingLanguages()
        {
            var allProgrammingLanguages = _programmingLanguageService.GetAllProgrammingLanguages();
            return Ok(allProgrammingLanguages);
        }
    }
}
