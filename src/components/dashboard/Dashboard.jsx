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
  symbol: 'AESAY',
  price: '10',
};

const initialPortfolio = [
   {
    quantity: 100,
    code: 'AESAY',
    buyPrice: 8,
    name: 'AES Tietê (O)',
    price: 10,
  },
  {
    quantity: 300,
    code: 'BAK',
    buyPrice: 5,
    name: 'Braskem (P)',
    price: 10,
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: '',
      selectedStockSell: '',
      money: 10000,
      portfolio: initialPortfolio,
      redirect: false
    };
    this.clickToBuy = this.clickToBuy.bind(this);
    this.clickToSell = this.clickToSell.bind(this);
    this.onSelectedToSell = this.onSelectedToSell.bind(this);
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  changeSelected = (stock) => {
    this.setState({ selectedStock: stock });
  };

  clickToBuy = (quantityBought) => {
    let { portfolio, selectedStock } = this.state;
    const newPortfolio = portfolio;
    const arrSelectedToBuy = portfolio.find((e) => e.code === selectedStock.code);
    const index = portfolio.findIndex((e) => e.code === selectedStock.code);
    if (arrSelectedToBuy) {
      newPortfolio[index].quantity +=  Number(quantityBought);
      this.setState({ portfolio: newPortfolio });
    } else {
      const quantity = {quantity: Number(quantityBought)};
      const obj = Object.assign({}, quantity, selectedStock);
      const port = [...newPortfolio, obj]
      console.log(port);
      this.setState({ portfolio: port });
    }
  }

  clickToSell = (quantity) => {
    const { portfolio, selectedStockSell } = this.state;
    const newPortfolio = portfolio;
    const arrSelectedToSell = portfolio.find((e) => e.code === selectedStockSell);
    const index = portfolio.findIndex((e) => e.code === selectedStockSell);
    if (quantity > arrSelectedToSell.quantity){
      alert('Você não pode vender isso tudo!');
    }
    else if (quantity <= arrSelectedToSell.quantity) {
      newPortfolio[index].quantity -= quantity;
      this.setState({ portfolio: newPortfolio });
    }

  }

  onSelectedToSell = (code) => {
    this.setState({ selectedStockSell: code })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const { money, portfolio, selectedStock } = this.state;
    return (
      <div className="dashboard">
        <button className="btn-dashboard" onClick={this.handleOnClick}>log out</button>
        <div className="trader-info">
          <h1>{this.props.match.params.firstName} {this.props.match.params.lastName}</h1>
          <p>Capital: R${this.state.money}</p>
        </div>
        <div className="wrapper-dashboard">
          <div className="dashboard-wrapper">
            <StockTable
            stocks={stocks}
            select={this.changeSelected}
            />
            <PortfolioTable onSelectedToSell={this.onSelectedToSell} portfolio={initialPortfolio} />
          </div>
          <Trade selectedStock={selectedStock} onClickSell={this.clickToSell} onClickBuy={this.clickToBuy} />
          <SelectedStock selected={selectedStock} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
