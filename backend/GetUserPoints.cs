using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace PointlessApp
{
    public static class GetUserPoints
    {
        [FunctionName("GetUserPoints")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            try
            {
                string email = req.Query["email"];

                return new OkObjectResult(email);
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(ex);
            }
        }
    }
}
