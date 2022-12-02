import anuncios from 'data/anuncios.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import alunos from 'assets/inicio.png'
import { useNavigate } from 'react-router-dom';
import { Anuncio } from 'types/Anuncio';


export default function Inicio(){
  let anunciosRecomendados = [...anuncios];
  anunciosRecomendados = anunciosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(anuncio: Anuncio) {
    navigate(`/anuncio/${anuncio.id}`, { state: { ...anuncio }, replace: true });
  }
    return(
        <section>
            <h3 className={stylesTema.titulo}>Anuncios Recomendados</h3>
            <div className={styles.recomendados}>
              {anunciosRecomendados.map((item) => (
                <div key={item.id} className = {styles.recomendado}>
                    <div className={styles.recomendado__imagem}>
                      <h3>{item.titulo}</h3>
                      <p>{item.descricao}</p>
                      </div>
                    <button 
                      className={styles.recomendado__botao}
                      onClick={() => redirecionarParaDetalhes(item)}
                      > Ver mais </button>
                </div>
              ))}
            </div>
            <h3 className={stylesTema.titulo}>
              Encontre sua oportunidade
            </h3>
            <div className={styles.nossaCasa}>
              <img src={alunos} alt="Alunos" />
            <div className={styles.nossaCasa__endereco}>
              Alunos Univesp <br /> <br /> BTI - 2020
            </div>
            </div>
        </section>
    )
}