import React, { Component } from 'react';

class PortfolioTableLine extends Component {
  render() {
    const { quantity, code, buyPrice , name, price } = this.props.stock;
    const {  onSelectedToSell } = this.props;
    return (
      <tr className="portifolio-table" onClick={() => onSelectedToSell(code)}>
        <td>{name}</td>
        <td>{code}</td>
        <td>{quantity}</td>
        <td>R${buyPrice}</td>
        <td>R${price}</td>
        <td>R${price - buyPrice}</td>
        <td>{((price - buyPrice) / buyPrice) * 100}%</td>
      </tr>
    );
  }
}

export default PortfolioTableLine;