using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Documents.Client;
using System.Linq;

namespace PointlessApp
{
    public static class GetUserPoints
    {
        public class User
        {
            public string email { get; set; }
            public int points { get; set; }
        }

        [FunctionName("GetUserPoints")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            [CosmosDB(
                databaseName: "pointlessapp",
                collectionName: "users",
                ConnectionStringSetting = "CosmosDBConnection"
            )] DocumentClient dataBase,
            ILogger log)
        {
            try
            {
                string email = req.Query["email"];

                var collectionUri = UriFactory.CreateDocumentCollectionUri("pointlessapp", "users");

                var user = dataBase.CreateDocumentQuery<User>(collectionUri)
                    .Where(p => p.email.Equals(email))
                    .AsEnumerable()
                    .FirstOrDefault();

                return new OkObjectResult(user.points);
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(ex);
            }
        }
    }
}
