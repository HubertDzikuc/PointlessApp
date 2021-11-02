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
    public static class SetUserPoints
    {
        public class User
        {
            public string email { get; set; }
            public int points { get; set; }
            public string id { get; set; }
        }

        [FunctionName("SetUserPoints")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = null)] HttpRequest req,
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
                Int32.TryParse(req.Query["points"], out var points);

                var collectionUri = UriFactory.CreateDocumentCollectionUri("pointlessapp", "users");

                var user = dataBase.CreateDocumentQuery<User>(collectionUri)
                    .Where(p => p.email.Equals(email))
                    .AsEnumerable()
                    .FirstOrDefault();

                user.points = points;

                var updateUserUri = UriFactory.CreateDocumentUri("pointlessapp", "users", user.id);
                await dataBase.ReplaceDocumentAsync(updateUserUri, user);

                return new OkObjectResult(user.points);
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(ex);
            }
        }
    }
}
