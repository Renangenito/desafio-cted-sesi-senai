import './navbarmin.css';

export default function NavBarMin({
    logoSrc,
    onConhecerCursos,
}) {
    return (

        <header className="detail__header">
            <div className="detail__brand">
                {logoSrc ? (
                    <img src={logoSrc} alt="SESI Indústria" className="detail__logo" />
                ) : (
                    <span>SESI+INDÚSTRIA</span>
                )}
            </div>

            <nav className="detail__nav" aria-label="Navegação principal">
                <a href="#" className="detail__nav-link detail__nav-link--active" onClick={onConhecerCursos}>Início</a>
                <a href="#" className="detail__nav-link" onClick={onConhecerCursos}>Cursos</a>
                <a href="#" className="detail__nav-link">Sobre</a>
                <a href="#" className="detail__nav-link detail__nav-link--outline">Área do aluno</a>
            </nav>
        </header>
    )
}