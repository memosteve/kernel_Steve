import React,{Component} from 'react';
import './Bloque.css';

class Bloque_CPU extends Component{
    render(){
        return(
            <div className="CPU">
                <header>
                    <p>{this.props.titulo}</p>
                </header>
                <select className="select_Scheduling">
                <option value="FIFO">FIFO</option>
                <option value="RR">Round Robin</option>
                <option value="SRT">SRT (apropiativo)</option>
                <option value="HRRN">HRRN (apropiativo)</option>
            </select>

                <div className="Dominio">
                        <p>Tamaño de Quantum</p>
                    </div>
                    <div className="Inputs">
                        <input></input>
                    </div>
            </div>
        );
    }
};


export default Bloque_CPU;
