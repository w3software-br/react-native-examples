import React, { Component } from 'react';
import './css/Conversor.css';

export default class Conversor extends Component {

  constructor (props) {
    super(props)

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0
    }
    // Isso é necessário para que o método converter possa acessar o this
    // Qualquer objeto que for passado no bind vai ser o this dentro do método
    // para o qual ele está send passado
    this.converter = this.converter.bind(this) 

  }

  converter() {
    let cotacao = 3.54
    let result = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
    this.setState({
      moedaB_valor: result
    });
    
  }
  

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}/>
        <input type="button" value="Converter" onClick={this.converter}/>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }

};
