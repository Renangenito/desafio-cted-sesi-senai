import "./ctatransformar.css";
import videoThumb from "../assets/video-thumb.png"; 
import { useNavigate } from "react-router-dom";

export default function CtaTransformar() {
    const navigate = useNavigate();
  return (
    <section className="cta">
      <div className="cta__left">
        <h2>Pronto para<br/>transformar sua<br/>carreira?</h2>
        <p>Junte-se a milhares de profissionais que já estão transformando a indústria através dos nossos cursos. Invista no seu futuro hoje mesmo!</p>
        <button className="cta__btn" onClick={() => navigate('/matricula')}>Matricule-se <span>→</span></button>
      </div>

      <div className="cta__right">
        <img src={videoThumb} alt="Profissionais na indústria" />
        </div>
    </section>
  );
}