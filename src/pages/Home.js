import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import ConfLogo from '../images/logo.png'

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <div className="formulario">
          <div className="row">
            <img className="Logo_home col-12" src={ConfLogo} alt="logo detektor"/>
            <h1 className="pb-4 col text-center">Informe Estadistico</h1>
          </div>
          <div class="form-group row pb-3">
            <label className="col" for="desde">Desde</label>
            <input id="desde" className="consulta col-6" type="date" required />
          </div>        
          <div class="form-group row pb-3">
            <label className="col" for="hasta">Hasta</label>
            <input id="hasta" className="consulta col-6" type="date" required />
          </div>
          <div className="form-group pb-3 row">
            <select className="consulta col" id="tipodeconsulta">
              <option selected disabled hidden>Tipo de consulta</option>
              <option value="1">Dia completo</option>
              <option value="2">Franja Horaria</option>
              <option value="3">Intervalo Continuo</option>
            </select>
          </div>
          <Link className="btn btn-primary container-fluid" to="SecondForm"> Siguiente </Link>
        </div>
      </div>
    )
  }
}

export default Home