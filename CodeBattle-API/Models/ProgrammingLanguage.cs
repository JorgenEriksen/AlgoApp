using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Models
{
    public class ProgrammingLanguage
    {
        [Key]
        public long Id { get; set; }
        public string Language { get; set; }
    }
}
