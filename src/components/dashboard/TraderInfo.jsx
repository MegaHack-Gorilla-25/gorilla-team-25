import React, { Component } from 'react';
import './dashboard.css';

class TraderInfo extends Component {
  render() {
    const { money } = this.props;
    return (
      <div className="trader-info">
        <h1>João Silva</h1>
        <p>Capital: R${money}</p>
      </div>
    );
  }
}

export default TraderInfo;
