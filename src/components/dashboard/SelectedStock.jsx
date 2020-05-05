import React, { Component } from 'react';

class SelectedStock extends Component {
  render() {
    const { name, code, actualPrice } = this.props.selected;
    return (
      <div className="display-left">
        <div className="acaorelative">
          <h3>Ação selecionada</h3>
            <h5>{name}</h5>
            <p>Código: {code}</p>
            <p>Preço: R${actualPrice}</p>
        </div>
      </div>
    );
  }
}

export default SelectedStock;
