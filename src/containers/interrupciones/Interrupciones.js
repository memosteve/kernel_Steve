import React from 'react';
import './Interrupciones.css';
import Contador from './ContTiempo/ContTiempo';
const Interrupciones = (props) =>{
    return(
        <div className="Conten">
            <Contador tiempo={props.tiempo}/>
            <select className="select1">
                <option value="Ejecutar">Ejecutar página</option>

            </select>
            <p className="inter1">Interrupcion: </p>
            <select className="select2">
                <option value="SVC1">SVC de solicitud de I/O</option>
                <option value="SVC2">SVC de terminación normal</option>
                <option value="SVC3">SVC de solicitud de fecha</option>
                <option value="Error_Porgrama">Error de programa</option>
                <option value="Quantum_Expirado">Externa de quantum expirado</option>
                <option value="I/O">Dispositivo I/O</option>
            </select>
        </div>
    );
};

export default Interrupciones;