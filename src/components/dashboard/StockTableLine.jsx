import React, { Component } from 'react';

class StockTableLine extends Component {
  render() {
    const { name, symbol, price } = this.props.stock;
    const { select } = this.props
    return (
      <tr onClick={() => select(this.props.stock)}>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default StockTableLine;
