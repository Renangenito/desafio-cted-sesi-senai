// É O SEU APP.JSX ATUAL, SÓ MUDEI O NOME PARA Home
import { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCourses, fetchCourseById, fetchMeta } from "../api.js";
import NavBar from "../components/NavBar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import CourseCard from "../components/CourseCard.jsx";
import CourseModal from "../components/CourseModal.jsx";
import AppImpactoTransformador from "../components/ImpactoTransformador.jsx";
import bg from "../assets/hero-image.png";
import logo from "../assets/logo-sesi-industria-white.svg";
import Depoimentos from "../components/Depoimentos.jsx";
import CtaTransformar from "../components/CtaTransformar.jsx";
import Footer from "../components/Footer.jsx";

const STATUS_CLASS = {
  "Disponível": "ok",
  "Em breve": "soon",
  "Indisponível": "off",
};

export default function Home() {
  const navigate = useNavigate(); // ADICIONA ISSO
  const [meta, setMeta] = useState({ categorias: [], modalidades: [], status: [] });
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const scrollerRef = useRef(null);
  const filtrosAtivos = useMemo(() => Boolean(nome.trim() || categoria || modalidade || status), [nome, categoria, modalidade, status]);

  useEffect(() => { fetchMeta().then(setMeta).catch(() => setMeta({ categorias: [], modalidades: [], status: [] })); }, []);
  useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(true); setError(null);
      try { const data = await fetchCourses({ nome, categoria, modalidade, status }); setCourses(data.courses); setTotal(data.total); }
      catch (e) { setError(e.message); setCourses([]); setTotal(0); }
      finally { setLoading(false); }
    }, 300);
    return () => clearTimeout(timer);
  }, [nome, categoria, modalidade, status]);

  function limparFiltros() { setNome(""); setCategoria(""); setModalidade(""); setStatus(""); }
  async function abrirDetalhes(id) {
    setModalLoading(true); setSelected(null);
    document.getElementById("curso-modal").showModal();
    try { setSelected(await fetchCourseById(id)); }
    catch (e) { setError(e.message); document.getElementById("curso-modal").close(); }
    finally { setModalLoading(false); }
  }
  const scroll = (dir) => { if (!scrollerRef.current) return; scrollerRef.current.scrollBy({ left: dir === 'next' ? 296 : -296, behavior: 'smooth' }); };
  const scrollCatalog = () => { document.getElementById('catalogo')?.scrollIntoView({behavior:'smooth'}) }

  return (
    <>
      <NavBar backgroundSrc={bg} logoSrc={logo} onConhecerCursos={scrollCatalog} />
      <main id="catalogo" className="container">
        <FilterBar nome={nome} setNome={setNome} categoria={categoria} setCategoria={setCategoria} modalidade={modalidade} setModalidade={setModalidade} status={status} setStatus={setStatus} meta={meta} filtrosAtivos={filtrosAtivos} limparFiltros={limparFiltros} />
        <p className="result-count">{loading ? "Carregando..." : `${total} cursos encontrados`}</p>

        {!error && !loading && courses.length > 0 && (
          <div className="carousel-wrapper">
            <ul className="grid" ref={scrollerRef}>
              {courses.map((c) => (
                <li key={c.id}>
                  <CourseCard 
                    course={c} 
                    statusClass={STATUS_CLASS[c.status] ?? ""} 
                    onOpen={abrirDetalhes} 
                    // AQUI O PULO DO GATO:
                    onMatricula={() => navigate(`/matricula/${c.id}`)}
                  />
                </li>
              ))}
            </ul>
            <div className="carousel-footer">
              <button className="ver-todos" onClick={scrollCatalog}>Ver todos os cursos</button>
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={() => scroll('prev')}>←</button>
                <button className="carousel-btn" onClick={() => scroll('next')}>→</button>
              </div>
            </div>
          </div>
        )}
        <AppImpactoTransformador />
      </main>
      <Depoimentos />
      <CtaTransformar />
      <Footer />
      <CourseModal course={selected} loading={modalLoading} />
    </>
  );
}