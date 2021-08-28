using CodeBattle_API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Services
{
    public class ProgrammingLanguageService
    {

        private CodeBattleContext _context;

        public ProgrammingLanguageService(CodeBattleContext context)
        {
            _context = context;
        }
        public List<ProgrammingLanguage> GetAllProgrammingLanguages()
        {
            System.Diagnostics.Debug.WriteLine("test");
            var _allProgrammingLanguages = _context.ProgrammingLanguage.ToList();
            System.Diagnostics.Debug.WriteLine("test2");
            return _allProgrammingLanguages;
        }
    }
}
