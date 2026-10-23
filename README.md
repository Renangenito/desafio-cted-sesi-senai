# CTED — Catálogo de Cursos

Aplicação web para consulta, pesquisa e filtragem do catálogo de cursos do **Centro de Tecnologias e Educação Digital (CTED)**. Projeto desenvolvido para processo seletivo — Desenvolvedor de Sistemas I.

## Objetivo

Disponibilizar um catálogo público de cursos em que o usuário possa:

- Listar todos os cursos a partir de uma API;
- Pesquisar cursos pelo nome (com debounce);
- Filtrar por **categoria**, **modalidade** e **status** — isolados ou combinados com a pesquisa;
- Visualizar a quantidade de resultados;
- Limpar os filtros aplicados;
- Abrir os detalhes de um curso em modal;
- Ver estados de **carregamento**, **erro** e **nenhum resultado**;
- Usar a interface em diferentes tamanhos de tela (responsivo) e com recursos de acessibilidade.

## Tecnologias utilizadas

| Camada     | Tecnologia |
|------------|------------|
| Front-end  | React 18 + Vite (JavaScript, CSS puro) |
| Back-end   | ASP.NET Core 8 (Minimal API) — C# / .NET |
| ORM        | Entity Framework Core 8 |
| Banco      | SQLite (código aberto, arquivo único) |
| Hospedagem | Render (API) + Vercel/Netlify (front-end) — planos gratuitos |

## Arquitetura da solução

```
Navegador (React SPA)
      │  HTTP/JSON (fetch, CORS liberado no back-end)
      ▼
API ASP.NET Core 8 ── EF Core ──► SQLite (cted.db, criado e semeado automaticamente)
```

- **Front-end**: SPA em React que consome a API. Componentização em `src/components/`. Sem framework CSS — estilos em `styles.css` com design tokens e media queries.
- **Back-end**: Minimal API com três endpoints (catálogo com filtros, detalhe por id, metadados para os filtros). CORS liberado para qualquer origem (adequado para API pública de leitura).
- **Banco**: SQLite em arquivo único. Criado via `EnsureCreated()` e semeado com dados fictícios na primeira execução, garantindo que a publicação gratuita (disco efêmero) sempre se recupere sozinha.

## Estrutura das pastas

```
cted-catalogo-cursos/
├── backend/
│   ├── CTED.Api.csproj
│   ├── Program.cs               # Minimal API: endpoints + CORS + seed
│   ├── appsettings.json         # Connection string do SQLite
│   ├── Properties/launchSettings.json
│   ├── Models/Course.cs         # Entidade do curso
│   └── Data/
│       ├── AppDbContext.cs
│       └── SeedData.cs          # 8 cursos fictícios
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env.example             # VITE_API_URL
│   └── src/
│       ├── main.jsx
│       ├── App.jsx              # Estado global, busca com debounce, estados de UI
│       ├── api.js               # Camada de acesso à API
│       ├── styles.css
│       └── components/
│           ├── FilterBar.jsx
│           ├── CourseCard.jsx
│           └── CourseModal.jsx
├── README.md
└── USO_DE_IA.md
```

## Instruções para execução (local)

**Pré-requisitos:** .NET SDK 8+ e Node.js 18+.

```bash
# 1. Back-end (porta 5080)
cd backend
dotnet restore
dotnet run
# Banco cted.db criado e semeado automaticamente na pasta backend/

# 2. Front-end (porta 5173) — em outro terminal
cd frontend
cp .env.example .env   # ajuste VITE_API_URL se a API estiver em outro endereço
npm install
npm run dev

# 3. Abrir http://localhost:5173
```

## Configuração do banco

Definida em `backend/appsettings.json`:

```json
"ConnectionStrings": {
  "Default": "Data Source=cted.db"
}
```

Não é necessário criar tabelas manualmente: `db.Database.EnsureCreated()` executa no startup. Para evoluir o modelo com migrations, o provider SQLite suporta `dotnet ef migrations add <nome>` normalmente.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Health check |
| GET | `/api/courses` | Lista cursos. Query params opcionais: `nome`, `categoria`, `modalidade`, `status` (combináveis) |
| GET | `/api/courses/{id}` | Detalhe de um curso (404 com mensagem se não existir) |
| GET | `/api/meta` | Valores distintos de categorias, modalidades e status (alimenta os filtros) |

**Exemplo:** `GET /api/courses?nome=excel&modalidade=H%C3%ADbrido&status=Em+breve`

Resposta do catálogo:

```json
{
  "total": 1,
  "courses": [ { "id": 7, "fullName": "...", "status": "Em breve", "...": "..." } ]
}
```

## Modelo de dados

**Course**

| Campo | Tipo | Observação |
|-------|------|-----------|
| Id | int | PK, autoincremento |
| FullName | string(150) | Nome completo |
| ShortName | string(50) | Nome breve (card) |
| Description | string | Descrição |
| Category | string(50) | Categoria |
| Modality | string(50) | Online / Híbrido / Presencial |
| WorkloadHours | int | Carga horária (horas) |
| TargetAudience | string(100) | Público-alvo |
| Status | string(30) | Disponível / Em breve / Indisponível |
| ImageUrl | string(300) | Imagem de apresentação (vazio = placeholder) |
| AvailabilityDate | DateTime? | Data de disponibilização (quando aplicável) |

Cobertura do seed: 8 cursos, 3 categorias (Tecnologia da Informação, Indústria, Gestão), 3 modalidades, 3 status, cargas horárias variadas (20h–140h).

## Estratégia de responsividade

- Grid de cards com `repeat(auto-fill, minmax(300px, 1fr))` — 3 colunas em desktop, 1 em mobile, sem breakpoints fixos para o catálogo;
- Barra de filtros: 5 colunas → 2 colunas (≤860px) → 1 coluna (≤520px), campo de busca sempre em largura total;
- Modal com `width: min(640px, 100% - 2rem)`;
- Tipografia fluida no título (`clamp`);
- Meta tag `viewport` e testes manuais em 360px, 768px e 1366px.

## Decisões de acessibilidade

- `lang="pt-BR"` e `meta description` no HTML;
- Skip link "Ir para o catálogo";
- Contador de resultados com `role="status"` e `aria-live="polite"` (leitura por leitores de tela sem poluir a navegação);
- Elementos nativos (`button`, `select`, `dialog`) com semântica própria; foco visível customizado via `:focus-visible`;
- `aria-label` no diálogo de detalhes e `aria-label="Fechar detalhes"` no botão de fechar;
- Esqueleto de carregamento com `aria-busy="true"` e `aria-label="Carregando cursos"`;
- Mensagens de erro com `role="alert"`;
- Respeito a `prefers-reduced-motion` (desativa shimmer e transições);
- Contraste das cores verificado (razão ≥ 4,5:1 para textos principais).

## Processo de publicação

**API (Render — gratuito)**

1. Suba este repositório ao GitHub.
2. No Render: *New → Web Service* → conecte o repositório, `Root Directory: backend`, Build `dotnet publish -c Release -o out`, Start `dotnet out/CTED.Api.dll`.
3. Plano **Free**. O SQLite é recriado a cada deploy, mas o seed automático repõe os dados — comportamento documentado e aceito para esta atividade.
4. Anote a URL gerada (ex.: `https://cted-api.onrender.com`).

**Front-end (Vercel — gratuito)**

1. *Add New → Project* → importe o mesmo repositório, `Root Directory: frontend`, Build `npm run build`, Output `dist`.
2. Em *Environment Variables*: `VITE_API_URL=<URL da API no Render>`.
3. Deploy. A Vercel fornece HTTPS, o CORS da API já permite qualquer origem.

**Custos:** zero — ambas as plataformas em plano gratuito. Nenhum serviço pago foi contratado e nenhum custo foi gerado para o SESI-SP.

## Limitações conhecidas

- Não há CRUD de cursos (fora do escopo, conforme o enunciado);
- `EnsureCreated()` em vez de migrations versionadas (suficiente para o escopo; migration pode ser adicionada depois);
- Imagens de apresentação usam placeholder gerado (iniciais), pois os assets do Figma não foram fornecidos neste material;
- Como o link do protótipo no Figma não acompanha este documento, a interface foi construída seguindo identidade visual típica da marca (vermelho institucional, tipografia do sistema) — eventuais diferenças estão justificadas em `USO_DE_IA.md`/entrega;
- Dados 100% fictícios, gerados para fins de demonstração.
