import styles from './Item.module.scss';
import anuncio from 'data/anuncios.json';
import classNames from 'classnames';

type Props = typeof anuncio[0];

export default function Item(props: Props) {
    const { titulo, descricao, modalidade, nivel, cidade, empresa,salario,id,categoria } = props;
    return(
    <div className={styles.item}>
        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2> {titulo} </h2>
                <p> {descricao}</p>
            </div>
        <div className={styles.item__tags}>
            <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${categoria.label.toLowerCase()}`]]: true
          })}
            >{categoria.label}</div>
            <div >
                <div className={styles.item__nivel}>{nivel}</div>
                <div className={styles.item__modalidade}>{modalidade}</div>
                <div className={styles.item__cidade}>{cidade}</div>
                <div className={styles.item__salario}>R$ {salario.toFixed(2)}</div>
            </div>
        </div>
        </div>
    </div>
    )
}