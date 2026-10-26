import './navbar.css';

export default function NavBar({
    backgroundSrc,
    logoSrc,
    onConhecerCursos,
}) {
    return (
        <section
            className="hero"
            aria-label="Apresentação SESI Indústria"
            style={{ backgroundImage: `url(${backgroundSrc})` }}
        >
            <div className="hero__overlay" />

            <header className="hero__header">
                <div className="hero__brand">
                    {logoSrc ? (
                        <img
                            src={logoSrc}
                            alt="SESI Indústria"
                            className="hero__logo"
                        />
                    ) : (
                        <span>SESI+INDÚSTRIA</span>
                    )}
                </div>

                <nav
                    className="hero__nav"
                    aria-label="Navegação principal"
                >
                    <a
                        href="#"
                        className="hero__nav-link hero__nav-link--active"
                    >
                        Início
                    </a>

                    <a
                        href="#"
                        className="hero__nav-link"
                        onClick={onConhecerCursos}
                    >
                        Cursos
                    </a>

                    <a
                        href="#"
                        className="hero__nav-link"
                    >
                        Sobre
                    </a>

                    <a
                        href="#"
                        className="hero__nav-link hero__nav-link--outline"
                    >
                        Área do aluno
                    </a>
                </nav>
            </header>

            <div className="hero__content">
                <h1 className="hero__title">
                    Impulsione
                    <br />
                    sua carreira
                    <br />
                    na indústria
                </h1>

                <p className="hero__subtitle">
                    Amplie seus conhecimentos com excelência na melhor
                    plataforma de estudos da indústria brasileira
                </p>

                <button
                    type="button"
                    className="hero__button"
                    onClick={onConhecerCursos}
                >
                    Conhecer cursos
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        </section>
    );
}