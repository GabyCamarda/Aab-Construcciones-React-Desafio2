import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
	render() {
		let name = 'Claudio';
		return (
			<div>
				<h1>Aab Construcciones</h1>
				<h2>Bienvenido {name}</h2>
				<ul>
					<li>Inicio</li>
					<li>Nosotros</li>
					<li>Servicios</li>
					<li>Contactos</li>
				</ul>
			</div>
		);
	}
}

export default App;
