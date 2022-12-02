import logo from 'assets/logo.png'
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu(){
    const rotas = [{
        label:'Início',
        to:'/'
    },{
        label:'Anuncios',
        to:'/anuncios'
    },{
        label:'Sobre',
        to:'/sobre'
    },{
        label:'Administração',
        to:'/admin/anuncios'
    }]
    return(
        <nav className={styles.menu} >
        <img src={logo} alt="logo Univesp" height='60px' width='60px'/>
        <ul className={styles.menu__list}>
            {rotas.map((rota, index) => (
            <li key={index} className={styles.menu__link}>
                <Link to={rota.to}>
                    {rota.label}
                </Link>
            </li>
            ))}
        </ul>
    </nav>

    )
}