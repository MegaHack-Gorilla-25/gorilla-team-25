import React, { Component } from 'react';

class PortfolioTableLine extends Component {
  render() {
    const { quantity, code, paidPrice , name, actualPrice } = this.props.stock;
    const { select } = this.props;
    const stock = {
      name: name,
      code: code,
      actualPrice: actualPrice,
    }
    return (
      <tr className="portifolio-table" onClick={() => select(stock)}>
        <td>{name}</td>
        <td>{code}</td>
        <td>{quantity}</td>
        <td>R${paidPrice}</td>
        <td>R${actualPrice}</td>
        <td>R${actualPrice - paidPrice}</td>
        <td>{((actualPrice - paidPrice) / paidPrice) * 100}%</td>
      </tr>
    );
  }
}

export default PortfolioTableLine;