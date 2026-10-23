using System.ComponentModel.DataAnnotations;

namespace CTED.Api.Models;

public class Course
{
    public int Id { get; set; }

    [Required, MaxLength(150)]
    public string FullName { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string ShortName { get; set; } = string.Empty;

    [Required]
    public string Description { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Category { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Modality { get; set; } = string.Empty;

    public int WorkloadHours { get; set; }

    [MaxLength(100)]
    public string TargetAudience { get; set; } = string.Empty;

    [Required, MaxLength(30)]
    public string Status { get; set; } = string.Empty;

    [MaxLength(300)]
    public string ImageUrl { get; set; } = string.Empty;

    public DateTime? AvailabilityDate { get; set; }
}
