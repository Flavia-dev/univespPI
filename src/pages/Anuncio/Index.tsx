import classNames from "classnames";
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import styles from './Anuncio.module.scss';
import anuncio from 'data/anuncios.json';
import TagsAnuncio from "components/TagsAnuncios/Index";
import NotFound from "pages/NotFound/Index";
import PaginaPadrao from "components/PaginaPadrao/Index";

export default function Anuncio(){
    const { id } = useParams();
    const navigate = useNavigate();
    const post = anuncio.find(item => item.id === Number(id));
    if (!post) {
        return <NotFound/>
    }    
    return(
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={

            <>
            <button className={styles.voltar}
            onClick={()=>navigate(-1)}>
                {'< Voltar'}
            </button>
            <div className={styles.container}>
                <h1 className={styles.titulo}>
                    {post.titulo}
                </h1>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {post.descricao}
                    </p>
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.tags__tipo]: true,
                            [styles[`tags__tipo__${post.categoria.label.toLowerCase()}`]]: true
                        })}>
                            {post.categoria.label}
                        </div>
                        <div className={styles.tags__modalidade}>
                            {post.modalidade}
                        </div>
                        <div className={styles.tags__cidade}>
                            {post.cidade}
                        </div>
                        <div className={styles.tags__nivel}>
                            {post.nivel}
                        </div>
                        <div className={styles.tags__salario}>
                            R$ {post.salario.toFixed(2)}
                        </div>

                    </div>
                </div>
            </div>
                  </>      
                }/>
            </Route>
        </Routes>
    )
}