import classNames from 'classnames';
import { Anuncio } from 'types/Anuncio';
import styles from './TagsAnuncio.module.scss';

export default function TagsAnuncio({
  categoria,
  nivel,
  cidade,
  salario
}: Anuncio) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${categoria.label.toLowerCase()}`]]: true
      })}>{categoria.label}</div>
      <div className={styles.tags__nivel}>{nivel}</div>
      <div className={styles.tags__cidade}>{cidade}</div>
      <div className={styles.tags__salario}>R$ {salario.toFixed(2)}</div>
    </div>
  );
}