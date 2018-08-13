import React, {Component} from 'react';


class Formulario extends Component {

	ciudad = React.createRef();
	pais = React.createRef();

	buscarClima = (e) => {
		e.preventDefault();
		const respuesta = {
			ciudad: this.ciudad.current.value,
			pais: this.pais.current.value
		}
		this.props.guardarDatos(respuesta);
		e.currentTarget.reset();
	}


	render() {
		return(
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<form onSubmit={this.buscarClima}>
							<div className="input-field col s12 m8 l4 offset-m2">
								<input ref={this.ciudad} id="ciudad" type="text" />
								<label htmlFor="ciudad">Ciudad</label>
							</div>
							<div className="input-field col s12 m8 l4 offset-m2">
								<select ref={this.pais} id="pais">
									<option value="" defaultValue>Elige un país</option>
									<option value="AR">Argentina</option>
									<option value="CO">Colombia</option>
									<option value="CR">Costa Rica</option>
									<option value="ES">España</option>
									<option value="US">Estados Unidos</option>
									<option value="MX">México</option>
									<option value="PE">Perú</option>
								</select>
								<label htmlFor="pais">País</label>
							</div>
							<div className="input-field col s12 m8 l4 offset-m2 buscador">
								<input type="submit" className="waves-effect waves-light btn btn-light yellow accent-4" value="Buscar..." />
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}

}



export default Formulario;