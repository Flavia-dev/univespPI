import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import univesp from 'assets/Sobre/logo.png';
import aluno1 from 'assets/Sobre/alunoTi.png';
import aluno2 from 'assets/Sobre/carteira.png';

const imagens = [aluno1, aluno2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={univesp} alt="Casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós, alunos da Univesp, criamos para nosso Projeto Integrador um sistema para ajudar a todos os alunos de nossa instituição!
          </p><br />
          <p>
            Aqui poderemos cadastrar e consultar vagas de emprego relacionadas à nossa formação possibilitando o ingresso ao mercado de trabalho!
          </p><br />
          <p>
            Esperamos contribuir para a formação e sucesso de nossos colegas!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}