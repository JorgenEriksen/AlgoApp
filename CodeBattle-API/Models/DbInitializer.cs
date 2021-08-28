using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeBattle_API.Models
{
    public class DbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<CodeBattleContext>();
                if (!context.ProgrammingLanguage.Any())
                {
                    context.ProgrammingLanguage.AddRange(new ProgrammingLanguage()
                    {
                        Language = "C++",

                    },
                    new ProgrammingLanguage()
                    {
                        Language = "Javascript",

                    },
                    new ProgrammingLanguage()
                    {
                        Language = "Haskell",

                    });
                    context.SaveChanges();
                }
            }
        }
    }
}
