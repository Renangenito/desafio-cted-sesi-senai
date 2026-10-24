import "./impactotransformador.css";
import image1 from "../assets/impacto-icons/image1.svg";
import image2 from "../assets/impacto-icons/image2.svg";
import image3 from "../assets/impacto-icons/image3.svg";

const stats = [
  { value: "25.000+", label: "Profissionais Capacitados" },
  { value: "500+", label: "Empresas parceiras" },
  { value: "4.8/5", label: "Avaliação média" },
  { value: "2.5M+", label: "Horas de capacitação" },
];

const features = [
  {
    icon: image1,
    title: "Certificação SESI",
    desc: "Cursos com a melhor certificação do mercado industrial reconhecidos pelo SESI.",
  },
  {
    icon: image2,
    title: "Professores especialistas",
    desc: "Contamos com professores reconhecidos por sua excelência no mercado.",
  },
  {
    icon: image3,
    title: "Suporte contínuo",
    desc: "Você não está sozinho! Acompanhamento online durante todo o curso.",
  },
];

export default function ImpactoTransformador() {
  return (
    <section className="impacto">
      <div className="impacto__left">
        <h2>Impacto<br/>transformador</h2>
        <p>Resultados que demonstram o sucesso da nossa metodologia de capacitação contínua para a indústria</p>
      </div>

      <div className="impacto__right">
        <div className="impacto__stats">
          {stats.map((s) => (
            <div key={s.label} className="impacto__stat">
              <span className="impacto__value">{s.value}</span>
              <span className="impacto__label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="impacto__features">
          {features.map((f) => (
            <div key={f.title} className="impacto__feature">
            <div className="impacto__icon"><img src={f.icon} alt={f.title} /></div>
              <strong>{f.title}</strong>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}