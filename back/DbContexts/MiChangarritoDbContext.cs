using Microsoft.EntityFrameworkCore;

namespace michangarrito_back.DbContexts
{
    public class MiChangarritoDbContext : DbContext
    {
        public MiChangarritoDbContext(DbContextOptions<MiChangarritoDbContext> options)
            : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}
