import React, { Component } from 'react';

class Trade extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <div className="display-rigth">
        <div>
          <label htmlFor="input">
            <h3>Quantidade</h3>
            <div className="txtb">
              <input type="text" value={quantity} placeholder="Comprar"/>
            </div>
            <button className="comprar-vender">Comprar</button>
          </label>
        </div>
        <div>
          <label htmlFor="input">
            <h3>Quantidade</h3>
              <div className="txtb">
                <input type="text" value={quantity} placeholder="Vender"/>
              </div>
            <button className="comprar-vender">Vender</button>
          </label>
        </div>
      </div>
    );
  }
}

export default Trade;
