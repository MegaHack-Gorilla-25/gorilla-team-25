import React, { Component } from 'react';

class PortfolioTableLine extends Component {
  render() {
    const { quantity, buyPrice , name, price} = this.props.stock[1];
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.stock[0]}</td>
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