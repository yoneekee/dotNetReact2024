// Query Handler

using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        /* Mediator : Query 
                - We pass out query which forms requests to a handler, and it returns to a data that specifies data we are looking for */
        public class Query : IRequest<List<Activity>> {
         
        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context, ILogger<List> logger) 
            {
                _context = context;
               
            }
            
            public async Task<List<Activity>> Handle(Query request, CancellationToken token)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}