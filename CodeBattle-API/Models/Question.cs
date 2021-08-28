using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Models
{
    public class Question
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public ProgrammingLanguage ProgrammingLanguageId { get; set; }
        public int Time { get; set; }
        public string Code { get; set; }
        public string Answer  { get; set; }
        public string AnswerExplanation { get; set; }
        public string AnswerAlternative1 { get; set; }
        public string AnswerAlternative2 { get; set; }
        public string AnswerAlternative3 { get; set; }

    }
}
