import "./ctatransformar.css";
import suaImagem from "../assets/video-thumb.png"; 

export default function CtaTransformar() {
  return (
    <section className="cta">
      <div className="cta__left">
        <h2>Pronto para<br/>transformar sua<br/>carreira?</h2>
        <p>Junte-se a milhares de profissionais que já estão transformando a indústria através dos nossos cursos. Invista no seu futuro hoje mesmo!</p>
        <button className="cta__btn">Matricule-se <span>→</span></button>
      </div>

      <div className="cta__right">
        <img src={suaImagem} alt="Profissionais na indústria" />
        </div>
    </section>
  );
}