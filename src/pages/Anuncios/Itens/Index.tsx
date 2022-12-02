import { useEffect, useState } from 'react';
import Item from './Item/Index';
import anuncio from 'data/anuncios.json';
import styles from './Itens.module.scss';

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
  }

export default function Itens(props: Props){
    const [lista, setLista] = useState(anuncio);
    const { busca, filtro, ordenador } = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
      }
    
    function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
    }

    function ordenar(novaLista: typeof anuncio) {
        switch(ordenador) {
          case 'cidade': 
            return novaLista.sort((a, b) => a.cidade > b.cidade ? 1 : -1);
          case 'modalidade':
            return novaLista.sort((a,b) => a.modalidade > b.modalidade ? 1 : -1);
          case 'nivel':
            return novaLista.sort((a,b) => a.nivel > b.nivel ? 1 : -1);
          default:
            return novaLista; 
        }
      }

    useEffect(() => {
        const novaLista = anuncio.filter(item => testaBusca(item.titulo) && testaFiltro(item.categoria.id));
        setLista(ordenar(novaLista));
      },[busca, filtro, ordenador])
    
    return(
        <div className={styles.container}>
            {lista.map(item => (
                <div className={styles.itens}>
                    <Item key={item.id} {...item}/>
                </div>
            ))}
        </div>
    )
}