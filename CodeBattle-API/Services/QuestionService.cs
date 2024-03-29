﻿using CodeBattle_API.Models;
using CodeBattle_API.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Services
{
    public class QuestionService
    {
        private CodeBattleContext _context;

        public QuestionService(CodeBattleContext context)
        {
            _context = context;
        }

        public void AddQuestion(AddQuestionVM newQuestion)
        {
            var programmingLanguage = _context.ProgrammingLanguage.FirstOrDefault(pl => pl.Id == newQuestion.ProgrammingLanguageId);

            // if found
            if (programmingLanguage != null)
            {
                var _newQuestion = new Question()
                {
                    Title = newQuestion.Title,
                    ProgrammingLanguage = programmingLanguage,
                    Time = newQuestion.Time,
                    Code = newQuestion.Code,
                    Answer = newQuestion.Answer,
                    AnswerExplanation = newQuestion.AnswerExplanation,
                    AnswerAlternative1 = newQuestion.AnswerAlternative1,
                    AnswerAlternative2 = newQuestion.AnswerAlternative2,
                    AnswerAlternative3 = newQuestion.AnswerAlternative3,
                };
                _context.Question.Add(_newQuestion);
                _context.SaveChanges();
            } else
            {
                System.Diagnostics.Debug.WriteLine("Did not find programming language id: {0}", newQuestion.ProgrammingLanguageId);
            }
            
        }

        public List<Question> GetAllQuestions()
        {
            var _allQuestions = _context.Question.ToList();
            return _allQuestions;
        }

        public Question GetQuestionById(int id)
        {
            var _question = _context.Question.FirstOrDefault(pl => pl.Id == id);
            return _question;
        }

    }
}
