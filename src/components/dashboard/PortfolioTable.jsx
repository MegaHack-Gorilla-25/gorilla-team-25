import React, { Component } from 'react';
import PortfolioTableLine from './PortfolioTableLine';

class PortfolioTable extends Component {
  render() {
    const { portfolio } = this.props;
    return (
      <div className="scrollbar-portfolio style-3">
        <div className="force-overflow">
          <table className="stock-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Código</th>
                <th>Quantidade</th>
                <th>Preço de Compra</th>
                <th>Preço Atual</th>
                <th>Lucro Liquido</th>
                <th>Lucro (%)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(portfolio).map((stock) => (
                <PortfolioTableLine stock={stock} key={stock[0]} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PortfolioTable;
