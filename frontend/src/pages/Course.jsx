import SideMenu from "../components/SideMenu.jsx";
import "../styles.css";
import heroImg from "../assets/banner-ava.png";
import logoSesi from "../assets/logo-sesi.svg";

export default function Course() {
  return (
    <div className="aula-layout">
      <SideMenu progresso={10} />
      
      <main className="aula-content">
        <div className="aula-hero">
          <span className="tag-sesi"><img src={logoSesi} alt="Medição com paquímetro" /></span>
          <img src={heroImg} alt="Medição com paquímetro" />
        </div>

        <section className="aula-text">
          <h2>Boas práticas</h2>
          <p>
            Se você está interessado em se aprofundar em Matemática para a Precisão, especialmente em Medidas e Escalas na Metalurgia, aqui estão algumas dicas para maximizar sua experiência online. Primeiro, crie um espaço de estudo livre de distrações, onde você possa se concentrar totalmente no material.
          </p>
          <p>
            Estabeleça uma rotina de estudos, reservando horários específicos para assistir às aulas e realizar as atividades. Além disso, interaja com seus colegas e instrutores nos fóruns e chats disponíveis, pois isso enriquece o aprendizado e ajuda a esclarecer dúvidas. Não se esqueça de revisar o conteúdo regularmente e aplicar os conhecimentos em situações práticas sempre que possível.
          </p>
          <p>
            Por fim, mantenha-se atualizado sobre as novas técnicas e normas em medidas e escalas na metalurgia, já que essa área está sempre evoluindo. Com dedicação e as estratégias corretas, você estará preparado para se destacar no setor!
          </p>

          <h2>Recomendações</h2>
          <p>
            Se você está interessado em se aprofundar na matemática aplicada à metalurgia, aqui estão algumas dicas valiosas. Primeiro, escolha um curso que ofereça uma abordagem prática, com aulas que incluam exercícios e estudos de caso. Isso ajudará a entender como aplicar medidas e escalas na prática. Além disso, verifique se o curso é reconhecido por instituições relevantes, pois isso pode impactar sua formação e carreira.
          </p>
          <p>
            Outro aspecto importante é a experiência dos instrutores. Procure cursos que tenham profissionais com experiência no setor, pois eles compartilhar insights valiosos que vão além da teoria.
          </p>
          <p>
            Considere também a carga horária e a flexibilidade do curso. Se você trabalha, um curso que ofereça aulas noturnas ou aos finais de semana pode ser mais conveniente.
          </p>
          <p>
            Por fim, não se esqueça de se conectar com outros alunos e profissionais da área. Isso pode abrir portas e proporcionar um aprendizado ainda mais enriquecedor. Investir em um bom curso de matemática para a metalurgia é essencial para garantir precisão e eficiência no trabalho.
          </p>
        </section>
      </main>
    </div>
  );
}