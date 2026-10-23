using CTED.Api.Models;

namespace CTED.Api.Data;

public static class SeedData
{
    public static void Seed(AppDbContext db)
    {
        db.Courses.AddRange(
            new Course
            {
                FullName = "Programação Back-end com C# e .NET",
                ShortName = "Back-end .NET",
                Description = "Curso completo de desenvolvimento back-end com C#, ASP.NET Core Web API, Entity Framework Core e boas práticas de arquitetura em camadas. O aluno constrói uma API REST do zero até a publicação.",
                Category = "Tecnologia da Informação",
                Modality = "Online",
                WorkloadHours = 120,
                TargetAudience = "Desenvolvedores iniciantes",
                Status = "Disponível",
                ImageUrl = "",
                AvailabilityDate = null
            },
            new Course
            {
                FullName = "Desenvolvimento Front-end Moderno",
                ShortName = "Front-end Web",
                Description = "HTML5, CSS3, JavaScript e React para construção de interfaces responsivas e acessíveis, com consumo de APIs REST e publicação em plataformas gratuitas.",
                Category = "Tecnologia da Informação",
                Modality = "Híbrido",
                WorkloadHours = 80,
                TargetAudience = "Estudantes de TI",
                Status = "Disponível",
                ImageUrl = "",
                AvailabilityDate = null
            },
            new Course
            {
                FullName = "Fundamentos de Banco de Dados Relacional",
                ShortName = "Banco de Dados",
                Description = "Modelagem de dados, normalização, SQL e introdução a bancos embarcados (SQLite) e servidores (PostgreSQL), com foco em consultas e integração com aplicações.",
                Category = "Tecnologia da Informação",
                Modality = "Presencial",
                WorkloadHours = 60,
                TargetAudience = "Iniciantes em dados",
                Status = "Em breve",
                ImageUrl = "",
                AvailabilityDate = new DateTime(2026, 11, 10)
            },
            new Course
            {
                FullName = "Eletricidade Industrial Básica",
                ShortName = "Eletricidade Ind.",
                Description = "Noções de circuitos elétricos, segurança do trabalho, leitura de diagramas e manutenção preventiva de instalações industriais, com aulas práticas em laboratório.",
                Category = "Indústria",
                Modality = "Presencial",
                WorkloadHours = 100,
                TargetAudience = "Trabalhadores da indústria",
                Status = "Disponível",
                ImageUrl = "",
                AvailabilityDate = null
            },
            new Course
            {
                FullName = "Automação e Comandos Elétricos",
                ShortName = "Automação",
                Description = "Sensores, atuadores, CLPs e lógica de automação aplicada a processos produtivos. Inclui prática com painéis de comando e programação de controladores.",
                Category = "Indústria",
                Modality = "Presencial",
                WorkloadHours = 140,
                TargetAudience = "Técnicos e eletricistas",
                Status = "Indisponível",
                ImageUrl = "",
                AvailabilityDate = null
            },
            new Course
            {
                FullName = "Gestão da Qualidade e Processos",
                ShortName = "Gestão da Qualidade",
                Description = "Ferramentas da qualidade, normas ISO 9001, mapeamento de processos e indicadores para melhoria contínua em ambientes produtivos e de serviços.",
                Category = "Gestão",
                Modality = "Online",
                WorkloadHours = 40,
                TargetAudience = "Lideranças e supervisores",
                Status = "Disponível",
                ImageUrl = "",
                AvailabilityDate = null
            },
            new Course
            {
                FullName = "Excel Avançado para Análise de Dados",
                ShortName = "Excel Avançado",
                Description = "Tabelas dinâmicas, Power Query, dashboards e automação com macros aplicados à análise de dados operacionais e relatórios gerenciais.",
                Category = "Gestão",
                Modality = "Híbrido",
                WorkloadHours = 36,
                TargetAudience = "Profissionais administrativos",
                Status = "Em breve",
                ImageUrl = "",
                AvailabilityDate = new DateTime(2026, 12, 1)
            },
            new Course
            {
                FullName = "Introdução à Indústria 4.0",
                ShortName = "Indústria 4.0",
                Description = "Visão geral das tecnologias da quarta revolução industrial: IoT, digitalização de processos, manufatura aditiva e análise de dados na indústria.",
                Category = "Indústria",
                Modality = "Online",
                WorkloadHours = 20,
                TargetAudience = "Público geral",
                Status = "Indisponível",
                ImageUrl = "",
                AvailabilityDate = null
            }
        );
        db.SaveChanges();
    }
}
