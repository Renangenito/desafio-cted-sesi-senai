import "./coursebenefits.css";
import iconCert from "../assets/01-certificacao-bege.svg";
import iconProf from "../assets/02-professores-bege.svg";
import iconSuporte from "../assets/03-suporte-bege.svg";
import iconFlex from "../assets/04-flexibilidade-bege.svg";

const beneficios = [
  { icon: iconCert, title: "Certificação SESI", desc: "Cursos com a melhor certificação do mercado industrial reconhecidos pelo SESI." },
  { icon: iconProf, title: "Professores especialistas", desc: "Contamos com professores reconhecidos por sua excelência no mercado." },
  { icon: iconSuporte, title: "Suporte contínuo", desc: "Você não está sozinho! Acompanhamento online durante todo o curso." },
  { icon: iconFlex, title: "Flexibilidade", desc: "Turmas presenciais e online com horários que se adaptam à sua rotina." },
];

export default function CurseBenefits() {
  return (
    <section className="cbene">
      <div className="cbene__grid">
        {beneficios.map((b) => (
          <div key={b.title} className="cbene__item">
            <div className="cbene__icon">
              <img src={b.icon} alt={b.title} />
            </div>
            <strong>{b.title}</strong>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}