import { AppBar, Container, Toolbar, Typography, Box, Button, Paper,Link } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";


export default function PaginaPadraoAdmin(){
    return (
        <>
        <AppBar position="static" >
        <Container maxWidth='xl'>
            <Toolbar>
                <Typography variant="h6">
                    Administração
                </Typography>
                <Box sx={{display:'flex', flexGrow: 1}}>
                    <Link component={RouterLink} to='/admin/anuncios'>
                        <Button sx={{ my: 2, color: 'white'}}>
                            Anuncios
                        </Button>
                    </Link>
                    <Link component={RouterLink} to='/admin/anuncios/novo'>
                        <Button sx={{ my: 2, color: 'white'}}>
                            Novo Anuncio
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
    <Box maxWidth="lg" sx={{ mt:1}}>
        <Paper sx={{ p:2 }}>
            <Outlet/>
        </Paper>
        </Box>

        </>
    )
}