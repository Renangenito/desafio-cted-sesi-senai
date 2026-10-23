import "./footer.css";
import logoSesiIndustria from "../assets/logo-sesi-industria-white.svg";
import logoSesi from "../assets/logo-sesi.svg";
import iconLinkedin from "../assets/icon-linkedin-24px.svg";
import iconInstagram from "../assets/icon-instagram-24px.svg";
import iconFacebook from "../assets/icon-facebook-24px.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* COL 1 - LOGO */}
        <div className="footer__col">
          <img src={logoSesiIndustria} alt="SESI + INDÚSTRIA" className="footer__logo-main" />
          <a href="mailto:contato@sesiindustria.com.br">contato@sesiindustria.com.br</a>
          <span>Av. Paulista, 1313</span>
        </div>

        {/* COL 2 - NAVEGAÇÃO */}
        <div className="footer__col">
          <strong>NAVEGAÇÃO</strong>
          <a href="#">Início</a>
          <a href="#">Certificação</a>
          <a href="#">Cursos</a>
          <a href="#">Sobre</a>
          <a href="#">Blog</a>
        </div>

        {/* COL 3 - CURSOS */}
        <div className="footer__col">
          <strong>CURSOS POPULARES</strong>
          <a href="#">Cultura Organizacional</a>
          <a href="#">Ferramentas Google para Produtividade</a>
          <a href="#">Excel Básico ao Avançado</a>
          <a href="#">Trabalho em Equipe e Colaboração</a>
          <a href="#">Gestão do Tempo e Produtividade</a>
          <a href="#">Comunicação Assertiva</a>
          <a href="#">Inteligência Emocional no Trabalho</a>
        </div>

        {/* COL 4 - SUPORTE */}
        <div className="footer__col">
          <strong>SUPORTE</strong>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Trabalhe Conosco</a>
          <a href="#">Fale Conosco</a>
          <a href="#">Central de Ajuda</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copy">
          <img src={logoSesi} alt="SESI" />
          <span>Todos os direitos reservados.</span>
        </div>
        <div className="footer__social">
          <a href="#"><img src={iconLinkedin} alt="LinkedIn" /></a>
          <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
          <a href="#"><img src={iconFacebook} alt="Facebook" /></a>
        </div>
      </div>
    </footer>
  );
}