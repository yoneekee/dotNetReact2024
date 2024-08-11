// Query Handler
using Application.Core;
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
            
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Activity>>.Success(await _context.Activities.ToListAsync(cancellationToken));
            }

            Task<List<Activity>> IRequestHandler<Query, List<Activity>>.Handle(Query request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        } 
    }
}