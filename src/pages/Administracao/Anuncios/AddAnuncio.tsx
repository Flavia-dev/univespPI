import { Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import http from "http/Index";
import anuncio from "data/anuncios.json"
import { Anuncio } from "types/Anuncio";

export default function AddAnuncio() {

    const parametros = useParams()

    useEffect(() => {
        if(parametros.id){
           
        const editar = (parametros: { id: number; })=> {
            alert(`Anuncio ${parametros.id} editado com sucesso!`)
            const listaAnuncio = lista.filter(item => item.id === parametros.id)
            setLista([...listaAnuncio]) 
            
        }
        }
    }, [parametros]);

    const [tituloAnuncio, setTituloAnuncio] = useState('')
    const [descricao, setDescricao] = useState('')
    const [modalidade, setModalidade] = useState('')
    const [nivel, setNivel] = useState('')
    const [cidade, setCidade] = useState('')
    const [salario, setSalario] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [categoria, setCategoria] = useState('')

    const [lista, setLista] = useState(anuncio);

    const novoAnuncio = {
        titulo: tituloAnuncio,
        descricao:descricao,
        modalidade:modalidade,
        nivel:nivel,
        cidade:cidade,
        empresa:empresa,
        salario:parseFloat(salario),
        id:100,
        categoria:{
            id: 0,
            label: categoria
        }
               
    }

    const adicionarAnuncio = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            const listaAnuncio = lista.filter(item => item.id === novoAnuncio.id )
            alert('Anuncio atualizado com sucesso!')
            setLista([...listaAnuncio])
            console.log([...listaAnuncio])

        } else {
                const listaAnuncio = lista.push(novoAnuncio)
                alert('Anuncio salvo com sucesso!')
                setLista([...anuncio])
        }

    }
    return (
            <Box maxWidth="lg" sx={{ mt: 2 }}>
                <Paper sx={{ p: 10 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
                        <Typography component="h1" variant="h6">Formulário de Anúncios</Typography>
                        <Box component="form" sx={{ width: '100%' }} onSubmit={adicionarAnuncio}>
                            <TextField
                                id="standard-basic"
                                label="Titulo do Anuncio"
                                variant="standard"
                                value={tituloAnuncio}
                                onChange={evento => setTituloAnuncio(evento.target.value)}
                                fullWidth
                                required
                                margin="dense"
                            />
                            <TextField
                                id="standard-basic"
                                label="Descrição"
                                variant="standard"
                                value={descricao}
                                onChange={evento => setDescricao(evento.target.value)}
                                fullWidth
                                required
                                margin="dense"
                            />
                            <TextField
                                id="standard-basic"
                                label="Modalidade"
                                variant="standard"
                                value={modalidade}
                                onChange={evento => setModalidade(evento.target.value)}
                                fullWidth
                                required
                                margin="dense"
                            />
                            <Box sx={{ width: '100%', display: "flex", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }}>

                                <TextField sx={{ width: '30%'}}
                                    id="standard-basic"
                                    label="Nivel"
                                    variant="standard"
                                    value={nivel}
                                    onChange={evento => setNivel(evento.target.value)}
                                    required
                                    margin="dense"
                                />
                                <TextField sx={{ width: '30%'}}
                                    id="standard-basic"
                                    label="Cidade"
                                    variant="standard"
                                    value={cidade}
                                    onChange={evento => setCidade(evento.target.value)}
                                    margin="dense"
                                    required
                                />
                                <TextField sx={{ width: '30%'}}
                                    id="standard-basic"
                                    label="Salário"
                                    variant="standard"
                                    value={salario}
                                    onChange={evento => setSalario(evento.target.value)}
                                    margin="dense"
                                    required
                                />
                            </Box>
                            <TextField
                                id="standard-basic"
                                label="Nome da Empresa"
                                variant="standard"
                                value={empresa}
                                onChange={evento => setEmpresa(evento.target.value)}
                                fullWidth
                                required
                                margin="dense"
                            />
                            <TextField
                                id="standard-basic"
                                label="Categoria"
                                variant="standard"
                                value={categoria}
                                onChange={evento => setCategoria(evento.target.value)}
                                fullWidth
                                required
                                margin="dense"
                            />


                            <Button
                                type="submit"
                                variant="outlined"
                                fullWidth
                                sx={{ marginTop: 2 }}
                            >Enviar</Button>
                        </Box >
                    </Box>

                </Paper>
            </Box>
    )
}