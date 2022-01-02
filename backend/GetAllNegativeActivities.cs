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
using Microsoft.Azure.Documents.Linq;
using System.Collections.Generic;

namespace PointlessApp
{
    public static class GetAllNegativeActivities
    {
        public class Activity
        {
            public string name { get; set; }
            public int points { get; set; }
        }

        [FunctionName("GetAllNegativeActivities")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            [CosmosDB(
                databaseName: "pointlessapp",
                collectionName: "negative-activities",
                ConnectionStringSetting = "CosmosDBConnection"
            )] DocumentClient dataBase,
            ILogger log)
        {
            try
            {
                var collectionUri = UriFactory.CreateDocumentCollectionUri("pointlessapp", "negative-activities");

                var query = dataBase.CreateDocumentQuery<Activity>(collectionUri)
                    .AsDocumentQuery();

                var activities = new List<Activity>();

                while (query.HasMoreResults)
                {
                    foreach (Activity result in await query.ExecuteNextAsync())
                    {
                        activities.Add(result);
                    }
                }

                return new OkObjectResult(activities);
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(ex);
            }
        }
    }
}
