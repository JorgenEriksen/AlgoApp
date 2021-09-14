using CodeBattle_API.Services;
using CodeBattle_API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : Controller
    {

        public QuestionService _questionService;

        public QuestionController(QuestionService questionService)
        {
            _questionService = questionService;
        }

        [HttpGet("{id}")]
        public IActionResult GetQuestionById(int id)
        {
            var _question = _questionService.GetQuestionById(id);
            if (_question != null)
            {
                return Ok(_question);
            }
            return NotFound();
        }

        [HttpGet]
        public IActionResult GetAllQuestion()
        {
            var allQuestions = _questionService.GetAllQuestions();
            if(allQuestions != null)
            {
                return Ok(allQuestions);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult AddQuestion(AddQuestionVM addQuestionVM)
        {
            _questionService.AddQuestion(addQuestionVM);

            return Ok();
        }
    }
}
