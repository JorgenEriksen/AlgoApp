using CodeBattle_API.Models;
using CodeBattle_API.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Services
{
    public class QuestionService
    {


        public void AddQuestion(AddQuestionVM AddQuestionVM)
        {
            var _newQuestion = new Question();
            /*
            Title = "What is val?",
            ProgrammingLanguage = 1
            Time = 120,
            Code = "val = 4",
            Answer = "4",
            AnswerExplanation = "val gets set to 4 in first line",
            AnswerAlternative1 = "1",
            AnswerAlternative2 = "3",
            AnswerAlternative3 = "5"
            */
        }

    }
}
