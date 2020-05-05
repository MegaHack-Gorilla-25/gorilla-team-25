import React, { Component } from 'react';
import stocks from './data';
import StockTable from './StockTable';
import Trade from './Trade';
import SelectedStock from './SelectedStock';
import PortfolioTable from './PortfolioTable';
import { Redirect } from 'react-router';
import './dashboard.css';

const initialSelectedStock = {
  name: 'AES Tietê (O)',
  code: 'AESAY',
  actualPrice: '10',
};

const initialPortfolio = [
   {
    quantity: 100,
    code: 'AESAY',
    paidPrice: 8,
    name: 'AES Tietê (O)',
    actualPrice: 10,
  },
  {
    quantity: 300,
    code: 'BAK',
    paidPrice: 5,
    name: 'Braskem (P)',
    actualPrice: 10,
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: initialSelectedStock,
      money: 10000,
      portfolio: initialPortfolio,
      redirect: false
    };
    this.clickToBuy = this.clickToBuy.bind(this);
    this.clickToSell = this.clickToSell.bind(this);
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  changeSelected = (stock) => {
    this.setState({ selectedStock: stock });
  };

  clickToBuy = (quantity) => {
    const { portfolio } = this.state;
    const { code, name, actualPrice } = this.state.selectedStock;
    const index = portfolio.findIndex((stock) => stock.code === code);
    if(index !== -1) {
      const newPort = [...portfolio]
      newPort[index].quantity = parseInt(quantity) + parseInt(quantity);
      console.log(newPort[index].quantity)
      this.setState({portfolio: newPort})
    } else {
      this.setState({
        portfolio: [...portfolio, {
          quantity: quantity,
          code: code,
          paidPrice: actualPrice,
          name: name,
          actualPrice: actualPrice,
        }]
      })
    }
  }

  clickToSell = (quantity) => {

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const { money, portfolio, selectedStock } = this.state;
    return (
      <div className="dashboard">
        <button className="btn-dashboard" onClick={this.handleOnClick}>log out</button>
        <div className="trader-info">
          <h1>{this.props.match.params.firstName} {this.props.match.params.lastName}</h1>
          <p>Capital: R${money}</p>
        </div>
        <div className="wrapper-dashboard">
          <div className="dashboard-wrapper">
            <StockTable stocks={stocks} select={this.changeSelected} />
            <PortfolioTable select={this.changeSelected} portfolio={portfolio} />
          </div>
          <div>
          <SelectedStock selected={selectedStock} />
          <Trade selectedStock={selectedStock} onClickSell={this.clickToSell} onClickBuy={this.clickToBuy} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
