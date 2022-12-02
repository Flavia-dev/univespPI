import Footer from 'components/Footer/Index'
import Menu from 'components/Menu/Index'
import PaginaPadrao from 'components/PaginaPadrao/Index'
import Anuncios from 'pages/Anuncios/Index'
import Inicio from 'pages/Inicio/Index'
import NotFound from 'pages/NotFound/Index'
import Sobre from 'pages/Sobre/Index'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Anuncio from 'pages/Anuncio/Index'
import AdminAnuncios from 'pages/Administracao/Anuncios/AdminAnuncios'
import AddAnuncio from 'pages/Administracao/Anuncios/AddAnuncio'
import PaginaPadraoAdmin from 'pages/Administracao/Anuncios/PaginaPadraoAdmin'
import 'index.css';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu/>
				<Routes>
					<Route path='/admin' element={<PaginaPadraoAdmin />}>
						<Route path='anuncios' element={<AdminAnuncios/>}/>
						<Route path='anuncios/novo' element={<AddAnuncio/>}/>
						<Route path='anuncios/:id' element={<AddAnuncio/>}/>
					</Route>


					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />}/>
                        <Route path='anuncios' element={<Anuncios/>}/>
                        <Route path='sobre' element={<Sobre/>}/>
					</Route>
					<Route path= 'anuncio/:id' element={<Anuncio/>} />
					<Route path= '*' element={<NotFound />} />


				</Routes>
				<Footer/>
			</Router>
		</main>
	);
}