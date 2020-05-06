import React, { Component } from 'react';

class TraderInfo extends Component {
  render() {
    return (
      <div> Capital: R$ {this.props.capital} </div>
    );
  }
}

export default TraderInfo;
