import "./cursedetail.css";
import videoThumb from "../assets/video-thumb.png";
import { useNavigate } from "react-router-dom";

export default function CurseDetail({ onMatricula }) {

  const navigate = useNavigate();
  
  return (
    <section className="cd-hero">
      <div className="cd-hero__left">
        <span className="cd-hero__tag">▭ MATEMÁTICA</span>
        
        <h1>Matemática para a<br/>Precisão: Medidas e<br/>Escalas na Metalurgia</h1>
        
        <div className="cd-hero__meta">
          <span><i>◫</i> Início do curso: <strong>05/01/2026</strong></span>
          <span><i>◉</i> Certificação: <strong>SESI</strong></span>
        </div>

        <button className="cd-hero__btn" onClick={() => navigate('/curso')}>
          Matricule-se <span>→</span>
        </button>
      </div>

      <div className="cd-hero__right">
        <img src={videoThumb} alt="Aula prática de metalurgia" />
      </div>
    </section>
  );
}