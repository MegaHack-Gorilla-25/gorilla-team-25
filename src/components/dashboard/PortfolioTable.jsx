import React, { Component } from 'react';
import PortfolioTableLine from './PortfolioTableLine';

class PortfolioTable extends Component {
  render() {
    const { portfolio, select } = this.props;
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
              {portfolio.map((stock) => (
                <PortfolioTableLine select={select} stock={stock} key={stock.name} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PortfolioTable;
