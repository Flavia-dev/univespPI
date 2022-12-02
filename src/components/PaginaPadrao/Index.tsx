import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Encontre a sua primeira oportunidade aqui
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet/>
            </div>
        </>
    )
}