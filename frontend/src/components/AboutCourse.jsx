import { useState } from "react";
import "./aboutcourse.css";

const secoes = [
    {
        titulo: "Módulos",
        conteudo: (
            <>
                <div className="mod">
                    <strong>1. Introdução à Matemática na Metalurgia</strong>
                    <ul>
                        <li>Conceitos fundamentais de medidas e escalas aplicados à metalurgia.</li>
                        <li>Importância da precisão nas medições e controle de qualidade.</li>
                        <li>Panorama das normas e regulamentações no Brasil relacionadas à metalurgia.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>2. Identificação e Avaliação de Medidas</strong>
                    <ul>
                        <li>Tipos de medidas utilizadas: comprimento, massa, volume e temperatura.</li>
                        <li>Técnicas de análise de precisão nas medições.</li>
                        <li>Elaboração de gráficos e tabelas de medidas.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>3. Normas e Regulamentações</strong>
                    <ul>
                        <li>Estudo das principais normas aplicáveis à metalurgia (ABNT, ISO, entre outras).</li>
                        <li>Interpretação e aplicação prática das normas de medição.</li>
                        <li>Atualizações e impactos legais nas práticas de medição.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>4. Instrumentos de Medição</strong>
                    <ul>
                        <li>Tipos de instrumentos utilizados na metalurgia: paquímetros, micrômetros e balanças.</li>
                        <li>Critérios de seleção, uso e calibração.</li>
                        <li>Responsabilidades legais de operadores e supervisores.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>5. Prevenção de Erros de Medição</strong>
                    <ul>
                        <li>Tipos de erros e incertezas na medições.</li>
                        <li>Procedimentos para garantir a precisão e exatidão.</li>
                        <li>Treinamento prático em técnicas de medição.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>6. Ergonomia e Eficiência na Medição</strong>
                    <ul>
                        <li>Principios ergonômicos aplicados ao uso de instrumentos de medição.</li>
                        <li>Prevenção de lesões por uso inadequado de instrumentos de ferramentas.</li>
                        <li>Qualidade de vida no ambiente de trabalho.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>7. Análise de Resultados de Medição</strong>
                    <ul>
                        <li>Técnicas de análise de dados de medições.</li>
                        <li>Elaboração de relatórios e planos de ação para melhorias.</li>
                        <li>Indicadores de precisão e melhoria contínua.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>8. Cultura de Precisão e Comportamento Seguro</strong>
                    <ul>
                        <li>Desenvolvimento de uma cultura organizacional voltada à precisão nas medições.</li>
                        <li>Comunicação eficaz e liderança em práticas de medição.</li>
                        <li>Programas de conscientização e engajamento dos colaboradores.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>9. Tecnologias Aplicadas à Medição</strong>
                    <ul>
                        <li>Uso de plataformas digitais, sensores e automação na medição de precisão.</li>
                        <li>Sistemas de gestão da qualidade.</li>
                        <li>Tendências e inovações no setor metalúrgico.</li>
                    </ul>
                </div>
                <div className="mod">
                    <strong>Avaliação Final e Certificação</strong>
                    <ul>
                        <li>Teste de conhecimentos adquiridos sobre medidas e escalas.</li>
                        <li>Atividades práticas e estudos de caso.</li>
                        <li>Emissão de certificado digital de conclusão.</li>
                    </ul>
                </div>
            </>
        ),
    },
    {

        titulo: "Aulas online e avaliações",
        conteudo: (
            <>
                <div className="mod">
                    <strong>Aulas online</strong>
                    <p>As aulas são organizadas em módulos temáticos e disponibilizadas em formato multimídia, combinando:</p>
                    <ul>
                        <li>Vídeo-aulas com especialistas da área, gravadas em alta qualidade e com recursos visuais que facilitam a compreensão dos conteúdos técnicos..</li>
                        <li>Materiais complementares como apostilas digitais, infográficos, artigos e estudos de caso.</li>
                        <li>Atividades interativas, como quizzes, simulações e fóruns de discussão, que promovem o engajamento e a troca de experiências entre os participantes.</li>
                        <li>Acesso multiplataforma, permitindo que os alunos estudem pelo computador, tablet ou celular, a qualquer hora e de qualquer lugar.</li>
                    </ul>
                    <p>Cada aula é acompanhada de recursos de acessibilidade, como legendas, transcrição de áudio e navegação intuitiva, garantindo inclusão e autonomia para todos os perfis de usuários.</p>
                </div>
                <div className="mod">
                    <strong>Provas e Avaliações</strong>
                    <p>As avaliações são realizadas diretamente na plataforma, com foco na verificação do aprendizado e na aplicação prática dos conhecimentos adquiridos:</p>
                    <ul>
                        <li>Provas objetivas ao final de cada módulo, com correção automática e feedback imediato.</li>
                        <li>Estudos de caso e atividades práticas, que simulam situações reais da indústria e exigem análise crítica e tomada de decisão.</li>
                        <li>Avaliação final integratória, que consolida os conteúdos do curso e valida a competência do aluno para atuar com segurança no ambiente industrial.</li>
                        <li>Sistema antifraude, com controle de tempo, embaralhamento de questões e, opcionalmente, reconhecimento facial para garantir a integridade das avaliações.</li>
                        </ul>
                    <p>Ao concluir o curso e ser aprovado nas avaliações, o aluno recebe um certificado digital reconhecido, que pode ser compartilhado em redes profissionais e utilizado para comprovação de capacitação técnica.</p>
                </div>
            </>)
    },
    {
        titulo: "Dúvidas frequentes",
        conteudo: (
            <>
                <div className="mod">
                    <strong>1.  O curso é totalmente online?</strong>
                    <p>Sim. Todas as aulas, atividades e avaliações são realizadas pela plataforma digital, permitindo que o aluno estude de onde estiver, no seu próprio ritmo.</p>
                </div>
                <div className="mod">
                    <strong>2. Preciso estar disponível em horários específicos?</strong>
                    <p>Não. As aulas são gravadas e ficam disponíveis 24 horas por dia. O aluno pode acessar o conteúdo quando for mais conveniente, respeitando os prazos de cada módulo.</p>
                </div>
                <div className="mod">
                    <strong>3. Como são feitas as avaliações?</strong>
                    <p>As avaliações são realizadas diretamente na plataforma, por meio de provas objetivas, estudos de caso e atividades práticas. Algumas avaliações podem ter tempo limitado e exigem atenção às instruções.</p>
                </div>
                <div className="mod">
                    <strong>4. O curso oferece certificado?</strong>
                    <p>Sim. Ao concluir todos os módulos e ser aprovado nas avaliações, o aluno recebe um certificado digital de conclusão, válido em todo o território nacional.</p>
                </div>
                <div className="mod">
                    <strong>5. Quem são os professores?</strong>
                    <p>O corpo docente é formado por especialistas, engenheiros e professores com ampla experiência em segurança do trabalho e atuação direta na indústria. Os perfis dos docentes estão disponíveis na plataforma.</p>
                </div>
                <div className="mod">
                    <strong>6. Há suporte para dúvidas durante o curso?</strong>
                    <p>Sim. Os alunos podem enviar dúvidas por meio dos fóruns de discussão, chats da plataforma ou durante os webinários ao vivo. A equipe pedagógica está disponível para auxiliar durante todo o curso.</p>
                </div>
                <div className="mod">
                    <strong>7. O curso exige algum conhecimento prévio?</strong>
                    <p>Não é obrigatório, mas é recomendado que o aluno tenha interesse ou alguma familiaridade com o ambiente industrial. O curso foi estruturado para atender tanto iniciantes quanto profissionais em busca de atualização.</p>
                </div>
                <div className="mod">
                    <strong>8. Posso acessar o curso pelo celular?</strong>
                    <p>Sim. A plataforma é responsiva e compatível com computadores, tablets e smartphones, garantindo uma experiência completa em qualquer dispositivo.</p>
                </div>
                <div className="mod">
                    <strong>9. Quanto tempo tenho para concluir o curso?</strong>
                    <p>O prazo para conclusão varia conforme o plano escolhido. Em geral, o aluno tem entre 3 a 6 meses para finalizar todos os módulos e avaliações.</p>
                </div>
                <div className="mod">
                    <strong>10.O curso é reconhecido por órgãos oficiais?</strong>
                    <p>O curso segue as diretrizes das Normas Regulamentadoras (NRs) e boas práticas da área, sendo reconhecido como formação complementar. Para certificações oficiais, é necessário verificar os requisitos específicos de cada órgão regulador.</p>
                </div>
            </>
        ),
    },
];

export default function AboutCourse() {
    const [open, setOpen] = useState(""); 

    return (
        <section className="sobre">
            <div className="sobre__left">
                <h2>Sobre o curso</h2>
                <p>
                    Explore nosso curso de Matemática para a Precisão: Medidas e Escalas na Metalurgia,
                    perfeito para quem deseja se destacar nesse campo! Este programa abrangente foi
                    desenvolvido para capacitar profissionais com as habilidades e conhecimentos
                    fundamentais para garantir medições precisas e eficientes no ambiente metalúrgico.
                </p>
            </div>

            <div className="sobre__right">
                {secoes.map((s, i) => {
                    const isOpen = open === i;
                    return (
                        <div key={s.titulo} className={`ac ${isOpen ? 'ac--open' : ''}`}>
                            <button className="ac__head" onClick={() => setOpen(isOpen ? -1 : i)}>
                                <span>{s.titulo}</span>
                                <span className="ac__icon">{isOpen ? '—' : '+'}</span>
                            </button>
                            {isOpen && <div className="ac__body">{s.conteudo}</div>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}