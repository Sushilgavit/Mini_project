using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace Product.Models
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\\ProjectModels;Initial Catalog=ReactDay01;Integrated Security=True");
            }
        }
        public DbSet<Product> Products { get; set; }
    }

}
