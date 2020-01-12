import React, { Component, Fragment } from 'react';
import Header from './components/header';
import ListaNoticas from './components/listaNoticas';
import Formulario from './components/formulario';

class App extends Component {
	state = {
		noticias: []
	};

	componentDidMount() {
		this.consultarNoticias();
	}

	consultarNoticias = async (categoria = 'general') => {
		const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=9f789a0d115b4ffc85e6a5f3730aa47f`;

		const respuesta = await fetch(url);
		const noticias = await respuesta.json();

		this.setState({
			noticias: noticias.articles
		});
	};

	render() {
		return (
			<Fragment>
				<Header titulo={'Noticas React API'} />

				<div className="container white contenedor-noticias">
					<Formulario consultarNoticia={this.consultarNoticias} />
					<ListaNoticas noticias={this.state.noticias} />
				</div>
			</Fragment>
		);
	}
}

export default App;
