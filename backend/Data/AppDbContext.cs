using CTED.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CTED.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Course> Courses => Set<Course>();
}
