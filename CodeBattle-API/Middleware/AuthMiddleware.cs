using Microsoft.AspNetCore.Http;
using CodeBattle_API.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace CodeBattle_API.Middleware
{
    public class AuthMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            string token = context.Request.Headers["Authorization"];
            System.Diagnostics.Debug.WriteLine("auth test");

            //do the checking
            if (token == null)
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Access denied!");
                System.Diagnostics.Debug.WriteLine("denied");
                return;
            }
            System.Diagnostics.Debug.WriteLine("approved");
            //pass request further if correct
            await next(context);
        }

     
    }
}
