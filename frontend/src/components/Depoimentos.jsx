import { useRef } from "react";
import "./depoimentos.css";

const depoimentosMock = [
  {
    texto: "A experiência do curso foi incrível! As aulas foram muito bem estruturadas e o cronograma foi cuidadosamente planejado, facilitando muito o aprendizado.",
    nome: "Lucas Pereira",
    cargo: "Analista na Empresa X",
  },
  {
    texto: "Concluir o curso foi uma jornada enriquecedora. As aulas eram dinâmicas e o horário foi organizado para maximizar nosso tempo de estudo.",
    nome: "Mariana Costa",
    cargo: "Gestora na Empresa X",
  },
  {
    texto: "O curso superou minhas expectativas! As aulas eram bem elaboradas e o planejamento de horário ajudou a manter o foco e a produtividade.",
    nome: "Thiago Almeida",
    cargo: "Técnico na Empresa X",
  },
  {
    texto: "Finalizar o curso foi uma experiência motivadora. As aulas foram muito bem preparadas e o cronograma foi ideal para o aprendizado.",
    nome: "Fernanda Silva",
    cargo: "Analista na Empresa X",
  },
  {
    texto: "A conclusão do curso foi uma etapa gratificante. A organização do horário facilitou o aprendizado.",
    nome: "Gabriel Santos",
    cargo: "Analista na Empresa X",
  },
];

const defaultColors = {
  bg: "#7a0a0a",
  card: "#a41e22",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.7)",
  controls: "#ffffff",
  header: "#ffffff"
};

export default function Depoimentos({ 
  data = depoimentosMock, 
  colors = {},
  title = "Quem fez recomenda",
  label = "DEPOIMENTOS"
}) {
  const ref = useRef(null);
  const c = { ...defaultColors, ...colors };

  const scroll = (dir) => {
    ref.current?.scrollBy({ left: dir === 'next' ? 300 : -300, behavior: 'smooth' });
  };

  return (
    <section 
      className="depo"
      style={{
        "--depo-header": c.header,
        "--depo-bg": c.bg,
        "--depo-card": c.card,
        "--depo-text": c.text,
        "--depo-text-muted": c.textMuted,
        "--depo-controls": c.controls,
      }}
    >
      <div className="depo__header">
        <div>
          <span>{label}</span>
          <h2>{title}</h2>
        </div>
      </div>

      <div className="depo__carousel" ref={ref}>
        {data.map((d, i) => (
          <article key={i} className="depo__card">
            <p>"{d.texto}"</p>
            <div className="depo__footer">
              <strong>{d.nome}</strong>
              <span>{d.cargo}</span>
              <div className="depo__stars">★★★★★</div>
            </div>
          </article>
        ))}
      </div>

      <div className="depo__controls">
        <button onClick={() => scroll('prev')}>←</button>
        <button onClick={() => scroll('next')}>→</button>
      </div>
    </section>
  );
}