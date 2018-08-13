import React, { Component } from 'react';
import './App.css';

import Header from './componentes/header';
import Formulario from './componentes/formulario';
import Error from './componentes/error';
import Clima from './componentes/clima';

class App extends Component {


  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidMount() {
    this.setState({
      error: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }    
  }

  guardarDatos = (respuesta) => {
    if(respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) {
      return null;
    }
    const appId = '6ceb793dc172fc3f425f39eca01bf92b';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    fetch(url)
      .then((res => {
        return res.json();
      }))
      .then(data => {
        this.setState({
          resultado: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    let resultado;

    if(this.state.error) {
      resultado = <Error mensaje='Ambos campos son obligatorios' />
    } else {
      resultado = <Clima resultado={this.state.resultado} />
    }

    return (
      <div className="App">
        <Header titulo='Clima React' />
        <Formulario guardarDatos={this.guardarDatos} />
        {resultado}
        
      </div>
    );
  }
}

export default App;
