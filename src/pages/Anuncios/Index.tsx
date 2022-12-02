import styles from './Anuncios.module.scss';
import Buscador from './Buscador/Index';
import { useState } from 'react';
import Filtros from './Filtros/Index';
import Ordenador from './Ordenador/Index';
import Itens from 'pages/Anuncios/Itens/Index';
import stylesTema from 'styles/Tema.module.scss';


export default function Anuncios(){
    const [busca , setBusca] = useState('');  
    const [filtro, setFiltro] = useState<number | null>(null); 
    const [ordenador, setOrdenador] = useState(""); 
    return(
            <section className={styles.anuncios}>
                <h3 className={stylesTema.titulo}>Anuncios</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.anuncios__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>
    )
}