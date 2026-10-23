export default function CourseModal({ course, loading }) {
  return (
    <dialog id="curso-modal" className="modal" aria-label="Detalhes do curso">
      <div className="modal__inner">
        <button
          type="button"
          className="modal__close"
          onClick={() => document.getElementById("curso-modal").close()}
          aria-label="Fechar detalhes"
        >
          ✕
        </button>

        {loading && <p className="state">Carregando detalhes…</p>}

        {!loading && course && (
          <>
            <span className={`pill pill--${course.status === "Disponível" ? "ok" : course.status === "Em breve" ? "soon" : "off"}`}>
              {course.status}
            </span>
            <h2>{course.fullName}</h2>
            <p>{course.description}</p>

            <dl className="modal__grid">
              <div><dt>Categoria</dt><dd>{course.category}</dd></div>
              <div><dt>Modalidade</dt><dd>{course.modality}</dd></div>
              <div><dt>Carga horária</dt><dd>{course.workloadHours} horas</dd></div>
              <div><dt>Público-alvo</dt><dd>{course.targetAudience}</dd></div>
              <div>
                <dt>Disponibilização</dt>
                <dd>
                  {course.availabilityDate
                    ? new Date(course.availabilityDate + "Z").toLocaleDateString("pt-BR", {
                        day: "2-digit", month: "2-digit", year: "numeric",
                      })
                    : "Imediata"}
                </dd>
              </div>
            </dl>
          </>
        )}
      </div>
    </dialog>
  );
}
