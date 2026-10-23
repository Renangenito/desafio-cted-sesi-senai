import MinhaImagem from "../assets/banner-ava.png";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Cor do tag igual da imagem
const TAG_COLOR = {
  "MATEMÁTICA": "mat",
  "CIÊNCIAS DA NATUREZA": "natureza",
  "CIENCIAS DA NATUREZA": "natureza",
};

export default function CourseCard({ course, statusClass, onOpen }) {
  // AQUI ESTÁ O FIX: tenta course.imageUrl, se não tiver usa sua imagem
  const imagem = course.imageUrl || MinhaImagem;
  const tagColor = TAG_COLOR[course.category?.toUpperCase()] || statusClass || "mat";

  return (
    <article className="ccard" onClick={() => onOpen(course.id)}>
      <div className="ccard__bg" aria-hidden="true">
        {course.imageUrl || true ? (
          <img src={imagem} alt="" loading="lazy" />
        ) : (
          <div className="ccard__fallback">{initials(course.shortName)}</div>
        )}
        <div className="ccard__overlay" />
      </div>

      <div className="ccard__content">
        <span className={`ccard__tag ccard__tag--${tagColor}`}>
          {course.category || course.status}
        </span>

        <div className="ccard__bottom">
          <div>
            <h2 className="ccard__title">{course.shortName}</h2>
            <p className="ccard__subtitle">
              {course.description}
            </p>
          </div>
          <div className="ccard__meta">
            <span>{course.modality}</span> • <span>{course.workloadHours}h</span>
          </div>
        </div>
      </div>
    </article>
  );
}