import React, { Component } from 'react';
import stocks from './data';
import StockTable from './StockTable';
import Trade from './Trade';
import SelectedStock from './SelectedStock';
import PortfolioTable from './PortfolioTable';
import { Redirect } from 'react-router';
import './dashboard.css';
import TraderInfo from './TraderInfo';

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
      capital: 10000,
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
    const { portfolio, capital } = this.state;
    const { code, name, actualPrice } = this.state.selectedStock;
    const index = portfolio.findIndex((stock) => stock.code === code);
    if(index !== -1) {
      const newPort = [...portfolio]
      newPort[index].quantity = parseInt(newPort[index].quantity) + parseInt(quantity);
      this.setState({
        portfolio: newPort,
        capital: capital - (quantity * actualPrice),
      })
    } else {
      this.setState({
        portfolio: [...portfolio, {
          quantity: quantity,
          code: code,
          paidPrice: actualPrice,
          name: name,
          actualPrice: actualPrice,
        }],
        capital: capital - (quantity * actualPrice),
      })
    }
  }

  clickToSell = (quantity) => {
    const { portfolio, capital } = this.state;
    const { code, actualPrice } = this.state.selectedStock;
    const index = portfolio.findIndex((stock) => stock.code === code);
    if(index !== -1) {
      const newPort = [...portfolio]
      newPort[index].quantity = parseInt(newPort[index].quantity) - parseInt(quantity);
      if ( newPort[index].quantity < 0 ) {
        newPort[index].quantity = 0;
      }
      this.setState({
        portfolio: newPort,
        capital: capital + (quantity * actualPrice),
      })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const { capital, portfolio, selectedStock } = this.state;
    return (
      <div className="dashboard">
        <button className="btn-dashboard" onClick={this.handleOnClick}>log out</button>
        <div className="trader-info">
          <h1>{this.props.match.params.firstName} {this.props.match.params.lastName}</h1>
          <TraderInfo capital={capital} />
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
