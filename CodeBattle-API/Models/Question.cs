using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Models
{
    public class Question
    {
        [Key]
        public long Id { get; set; }
        public string Title { get; set; }
        public ProgrammingLanguage ProgrammingLanguage { get; set; }
        public long ProgrammingLanguageId { get; set; }
        public int Time { get; set; }
        public string Code { get; set; }
        public string Answer  { get; set; }
        public string AnswerExplanation { get; set; }
        public string AnswerAlternative1 { get; set; }
        public string AnswerAlternative2 { get; set; }
        public string AnswerAlternative3 { get; set; }

    }
}
