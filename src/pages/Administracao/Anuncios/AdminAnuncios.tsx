import { Button, Card, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import anuncio from 'data/anuncios.json';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Anuncio } from "types/Anuncio";




export default function AdminAnuncios() {
    const [lista, setLista] = useState(anuncio);
    const excluir = (anuncioASerExcluido : Anuncio) => {
        alert('Anuncio excluido com sucesso!')
        // http.delete(`${anuncioASerExcluido.id}`)
        //     .then(() =>{
                const listaAnuncio = lista.filter(item => item.id !== anuncioASerExcluido.id)
                setLista([...listaAnuncio])
            // })
    }

    return (
            <TableContainer component={Card} >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Titulo
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                {lista.map(item => (
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {item.titulo}
                            </TableCell>
                            <TableCell>
                                [ <Link to={`/admin/anuncios/${item.id}`}> Editar </Link> ]
                            </TableCell>
                            <TableCell>
                                <Button variant='outlined' color='error' onClick={() => excluir(item)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                ))}
            </TableContainer>
    )
}