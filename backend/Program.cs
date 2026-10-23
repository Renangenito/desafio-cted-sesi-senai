using CTED.Api.Data;
using CTED.Api.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddCors(o => o.AddPolicy("frontend", p =>
    p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));

var app = builder.Build();

// Garante o banco e semeia os dados fictícios na primeira execução.
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
    if (!db.Courses.Any()) SeedData.Seed(db);
}

app.UseCors("frontend");

app.MapGet("/api/health", () => Results.Ok(new { status = "ok", horario = DateTime.UtcNow }));

app.MapGet("/api/courses", (AppDbContext db, string? nome, string? categoria, string? modalidade, string? status) =>
{
    var q = db.Courses.AsQueryable();

    if (!string.IsNullOrWhiteSpace(nome))
        q = q.Where(c => EF.Functions.Like(c.FullName, "%" + nome + "%")
                    || EF.Functions.Like(c.ShortName, "%" + nome + "%"));
    if (!string.IsNullOrWhiteSpace(categoria)) q = q.Where(c => c.Category == categoria);
    if (!string.IsNullOrWhiteSpace(modalidade)) q = q.Where(c => c.Modality == modalidade);
    if (!string.IsNullOrWhiteSpace(status)) q = q.Where(c => c.Status == status);

    var courses = q.OrderBy(c => c.FullName).ToList();
    return Results.Ok(new { total = courses.Count, courses });
});

app.MapGet("/api/courses/{id:int}", (AppDbContext db, int id) =>
    db.Courses.Find(id) is { } curso
        ? Results.Ok(curso)
        : Results.NotFound(new { message = "Curso nao encontrado." }));

app.MapGet("/api/meta", (AppDbContext db) => Results.Ok(new
{
    categorias = db.Courses.Select(c => c.Category).Distinct().OrderBy(x => x).ToList(),
    modalidades = db.Courses.Select(c => c.Modality).Distinct().OrderBy(x => x).ToList(),
    status = db.Courses.Select(c => c.Status).Distinct().OrderBy(x => x).ToList()
}));

app.Run();
