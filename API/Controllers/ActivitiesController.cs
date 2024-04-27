using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        
        // dependency injection
        public ActivitiesController(DataContext context)
        {
            // this.context = context;
            _context = context;
        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }
        
        [HttpGet("{id}")] //api/activities/1234...
        public async Task<ActionResult<Activity>> GetActivity(Guid id) 
        {
            return await _context.Activities.FindAsync(id);
        }

    }
}