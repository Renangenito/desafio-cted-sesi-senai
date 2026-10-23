export default function FilterBar({
  nome, setNome,
  categoria, setCategoria,
  modalidade, setModalidade,
  status, setStatus,
  meta, filtrosAtivos, limparFiltros,
}) {
  return (
    <section className="filters" aria-label="Pesquisa e filtros de cursos">
      <div className="filters__row">
        <label className="field field--search">
          <span>Pesquisar por nome</span>
          <input
            type="search"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex.: desenvolvimento, excel…"
          />
        </label>

        <label className="field">
          <span>Categoria</span>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Todas</option>
            {meta.categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Modalidade</span>
          <select value={modalidade} onChange={(e) => setModalidade(e.target.value)}>
            <option value="">Todas</option>
            {meta.modalidades.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Status</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Todos</option>
            {meta.status.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <button
          type="button"
          className="btn btn--ghost"
          onClick={limparFiltros}
          disabled={!filtrosAtivos}
        >
          Limpar filtros
        </button>
      </div>
    </section>
  );
}
