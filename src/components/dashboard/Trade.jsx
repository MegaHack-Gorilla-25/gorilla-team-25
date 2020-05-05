import React, { Component } from 'react';

class Trade extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      quantityToBuy: 0,
      quantityToSell: 0,
    }
    this.onChangeBuy = this.onChangeBuy.bind(this);
    this.onChangeSell = this.onChangeSell.bind(this);
  }

  onChangeBuy = (event) => {
    this.setState({ quantityToBuy: event.target.value })
  }

  onChangeSell = (event) => {
    this.setState({ quantityToSell: event.target.value })
  }

  render() {
    const { quantity, onClickBuy, onClickSell } = this.props;
    const { quantityToBuy, quantityToSell } = this.state;
    return (
      <div className="display-rigth">
        <div>
          <label htmlFor="input">
            <h3>Quantidade</h3>
            <div className="txtb">
              <input type="text" onChange={this.onChangeBuy} value={quantity} placeholder="Comprar"/>
            </div>
            <button onClick={() => onClickBuy(quantityToBuy)} className="comprar-vender">Comprar</button>
          </label>
        </div>
        <div>
          <label htmlFor="input">
            <h3>Quantidade</h3>
              <div className="txtb">
                <input type="text" onChange={this.onChangeSell} value={quantity} placeholder="Vender"/>
              </div>
            <button onClick={() => onClickSell(quantityToSell)} className="comprar-vender">Vender</button>
          </label>
        </div>
      </div>
    );
  }
}

export default Trade;
