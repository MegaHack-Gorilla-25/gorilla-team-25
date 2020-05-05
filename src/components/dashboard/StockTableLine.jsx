import React, { Component } from 'react';

class StockTableLine extends Component {
  render() {
    const { name, code, actualPrice } = this.props.stock;
    const { select } = this.props;
    return (
      <tr onClick={() => select(this.props.stock)}>
        <td>{name}</td>
        <td>{code}</td>
        <td>R$ {actualPrice}</td>
      </tr>
    );
  }
}

export default StockTableLine;
