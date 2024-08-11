using Microsoft.AspNetCore.Mvc;
using Application.Activities;
using Domain;
using Application.Core;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet] //api/activities
        public async Task<IActionResult> GetActivities()
        {
            //return HandleResult(await Mediator.Send(new List.Query()));
            var activities = await Mediator.Send(new List.Query());
            var result = Result<List<Activity>>.Success(activities);
            return HandleResult<List<Activity>>(result);

        }
        
        [HttpGet("{id}")] //api/activities/1234...
        public async Task<IActionResult> GetActivity(Guid id) 
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity) {
            return HandleResult(await Mediator.Send(new Create.Command{Activity = activity}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity) {
            return HandleResult(await Mediator.Send(new Edit.Command{Activity = activity}));

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id) {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }

    }
}