# Registro de Uso de Inteligência Artificial

Este arquivo registra o uso de IA no desenvolvimento da aplicação **CTED — Catálogo de Cursos**, conforme exigido nas instruções da atividade prática.

## Ferramenta utilizada

- **Kimi** (assistente de IA, Moonshot AI) — geração e revisão de código, explicações de arquitetura e elaboração de documentação.
- *(Complemente se usou outras ferramentas, ex.: GitHub Copilot, ChatGPT, Cursor.)*

## Objetivo do uso

1. **Estruturação inicial do projeto:** definição da stack (ASP.NET Core Minimal API + EF Core + SQLite + React/Vite) e das pastas do repositório.
2. **Geração de código de base:** esqueleto da API (endpoints, DbContext, seed), componentes React (lista, filtros, card, modal) e folha de estilos responsiva/acessível.
3. **Documentação:** elaboração das seções técnicas do `README.md` (endpoints, modelo de dados, publicação, acessibilidade, responsividade).
4. **Sanity check:** revisão de boas práticas (parameterização de consultas, debounce de busca, estados de loading/erro/vazio).

## Prompts relevantes — o que foi aproveitado ou descartado

| Prompt (resumo) | Resultado |
|---|---|
| "Criar Minimal API .NET 8 com SQLite para catálogo de cursos com filtros combináveis" | **Aproveitado**: estrutura de endpoints com query params opcionais e retorno `{ total, courses }`. |
| "Gerar seed com 6+ cursos fictícios em português, 3 categorias, 2+ modalidades, 3 status" | **Aproveitado parcialmente**: gerou 8 cursos; descrições foram **ajustadas manualmente** para ficarem mais realistas e variadas (cargas 20h–140h). |
| "Componente React de filtros com select para categoria/modalidade/status" | **Aproveitado**: `FilterBar.jsx` com selects alimentados por `/api/meta`. |
| "Usar `string.Contains` para pesquisa por nome" | **Descartado**: no SQLite com EF Core, `Contains` não traduz para `LIKE` de forma consistente em todos os casos; adotado `EF.Functions.Like` com concatenação de parâmetro (evita interpolação direta, prevenindo SQL injection). |
| "Estilizar com Tailwind" | **Descartado**: optou-se por CSS puro com design tokens para reduzir dependências e facilitar a publicação gratuita. |
| "Publicar imagens via URL externa" | **Descartado**: mantido placeholder local (iniciais) para não depender de serviço externo de imagens. |

## Como o conteúdo gerado foi validado

- **Compilação lógica:** leitura linha a linha dos arquivos gerados, verificando usings, namespaces e tipos;
- **Contrato de API:** conferência de que os campos consumidos no front-end (`id`, `shortName`, `workloadHours`, `availabilityDate`, etc.) existem na entidade `Course` e nos DTOs retornados;
- **Cobertura de requisitos:** checklist contra o enunciado (6+ cursos, 3 categorias, 3 status, filtros combináveis, contador, limpar filtros, detalhes, loading, erro, vazio, responsividade);
- **Testes manuais planejados:** execução local (`dotnet run` + `npm run dev`) em três larguras de tela (360px, 768px, 1366px) antes da publicação;
- **Revisão de segurança:** confirmação de que a pesquisa por nome usa `EF.Functions.Like` com parâmetro concatenado (EF o parameteriza), e não interpolação de string.

## Exemplo de erro / inadequação identificado

**Erro:** na primeira geração da consulta por nome, o código sugerido interpolava o termo diretamente na string do `Like`:

```csharp
// inadequado — EF não parameteriza interpolação aqui e abre risco de SQL injection
q.Where(c => EF.Functions.Like(c.FullName, $"%{nome}%"))
```

**Correção realizada:** substituição por concatenação com o valor como argumento, garantindo parameterização pelo EF Core:

```csharp
q.Where(c => EF.Functions.Like(c.FullName, "%" + nome + "%")
          || EF.Functions.Like(c.ShortName, "%" + nome + "%"))
```

**Outro exemplo:** o primeiro prompt de seed trouxe 2 categorias apenas (menos que o mínimo de 3); foi corrigido ampliando para Tecnologia da Informação, Indústria e Gestão.

## Considerações finais

A IA atuou como **acelerador de escrita de código e documentação**. Todas as decisões de arquitetura foram tomadas pelo candidato, e o código final foi lido, entendido e validado antes da entrega. Nenhum trecho foi entregue sem revisão.
