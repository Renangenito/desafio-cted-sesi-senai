import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidemenu.css";

export default function SideMenu({
    cursoNome = "Matemática para a Precisão: Medidas e Escalas na Metalurgia",
    progresso = 10
}) {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <>
            {/* Botão para abrir o menu no modo responsivo */}
            <button
                className="side__mobile-toggle"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
                {menuAberto ? "←" : "☰"}
            </button>

            {/* Fundo escuro quando o menu estiver aberto */}
            {menuAberto && (
                <div
                    className="side__overlay"
                    onClick={() => setMenuAberto(false)}
                />
            )}

            <aside className={`side ${menuAberto ? "side--open" : ""}`}>
                <div className="side__top">
                    <button
                        className="side__back"
                        onClick={() => navigate(-1)}
                        aria-label="Voltar"
                    >
                        ← Voltar
                    </button>

                    <span className="side__label">
                        CERTIFICAÇÃO
                    </span>

                    <strong className="side__title">
                        {cursoNome}
                    </strong>

                    <div className="side__prog">
                        <div className="side__bar">
                            <span
                                style={{
                                    width: `${progresso}%`
                                }}
                            />
                        </div>

                        <small>{progresso}%</small>
                    </div>

                    <div className="side__search">
                        <input
                            type="text"
                            placeholder="Buscar..."
                        />

                        <button aria-label="Pesquisar">
                            ⌕
                        </button>
                    </div>
                </div>

                <nav className="side__nav">
                    <div className="side__mod">
                        <span>1. Introdução</span>

                        <a className="active">
                            <span className="dot on">●</span>
                            1.1 Introdução
                        </a>

                        <a className="active">
                            <span className="dot on">●</span>
                            1.2 Boas práticas
                        </a>

                        <a>
                            <span className="dot">○</span>
                            1.3 Extras
                        </a>
                    </div>

                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <a
                            key={n}
                            className="side__mod-item"
                        >
                            {n}. Módulo {n}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}