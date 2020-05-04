import React, { Component } from 'react';
import stocks from './data';
import StockTable from './StockTable';
import Trade from './Trade';
import SelectedStock from './SelectedStock';
import TraderInfo from './TraderInfo';
import PortfolioTable from './PortfolioTable';
import { Redirect } from 'react-router';
import './dashboard.css';

const initialSelectedStock = {
  name: 'AES Tietê (O)',
  symbol: 'AESAY',
  price: '10',
};

const initialPortfolio = {
  AESAY: {
    quantity: 100,
    buyPrice: 8,
    name: 'AES Tietê (O)',
    price: 10,
  },
  BAK: {
    quantity: 300,
    buyPrice: 5,
    name: 'Braskem (P)',
    price: 10,
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: initialSelectedStock,
      money: 10000,
      portfolio: initialPortfolio,
      redirect: false
    };
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  changeSelected = (stock) => {
    this.setState({ selectedStock: stock });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <div className="dashboard">
        <button className="btn-dashboard" onClick={this.handleOnClick}>log out</button>
        <TraderInfo money={this.state.money} />
        <div className="wrapper-dashboard">
          <div className="dashboard-wrapper">
            <StockTable stocks={stocks} select={this.changeSelected} />
            <PortfolioTable portfolio={initialPortfolio} />
          </div>
          <Trade />
          <SelectedStock selected={this.state.selectedStock} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
