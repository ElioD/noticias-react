import React from 'react';
import Noticia from './noticia';

const ListaNoticas = ({ noticias }) => (
	<div className="row">{noticias.map((noticia) => <Noticia key={noticia.url} noticia={noticia} />)}</div>
);

export default ListaNoticas;
