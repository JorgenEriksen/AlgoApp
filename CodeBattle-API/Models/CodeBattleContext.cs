using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Models
{
    public class CodeBattleContext : DbContext
    {
        public CodeBattleContext(DbContextOptions<CodeBattleContext> options) : base(options)
        {

        }

        public DbSet<Question> Question { get; set; }
        public DbSet<ProgrammingLanguage> ProgrammingLanguage { get; set; }
    }
}
