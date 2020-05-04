import React, { Component } from 'react';
import StockTableLine from './StockTableLine';
import './dashboard.css';

class StockTable extends Component {
  render() {
    const { stocks, select } = this.props;
    return (
      <div className="scrollbar-stock-list style-3">
        <div className="force-overflow">
          <table className="stock-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Código</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <StockTableLine
                  stock={stock}
                  select={select}
                  key={stock.symbol}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StockTable;
