using DAL.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class SiteContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Data Source=LAPTOP-N7FBE5OG; Database=Site; integrated security=True;");
            

        }
        public DbSet<User> user { get; set; }
        public DbSet<Daire> daire { get; set; }
        public DbSet<Fatura> fatura { get; set; }
        public DbSet<Mesaj> mesaj { get; set; }

        public DbSet<APIAuthority> APIAuthority { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Daire>().ToTable("Daire");
            modelBuilder.Entity<Fatura>().ToTable("Fatura");
            modelBuilder.Entity<Mesaj>().ToTable("Mesaj");
            modelBuilder.Entity<APIAuthority>().ToTable("APIAuthority");
        }

    }
}
