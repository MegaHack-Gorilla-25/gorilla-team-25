import React, { Component } from 'react';

class PortfolioTableLine extends Component {
  render() {
    const { quantity, code, paidPrice , name, actualPrice } = this.props.stock;
    const { selected } = this.props;
    return (
      <tr className="portifolio-table" onClick={() => selected(code)}>
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