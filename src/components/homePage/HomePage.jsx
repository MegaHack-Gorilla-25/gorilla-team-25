import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './homePage.css';

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state={
      redirectLogin: false,
      navigationIcon: "navigation__icon",
      redirectRegister: false,
    }
  }
  handleOnClickLogin = () => {
    this.setState({redirectLogin: true});
  }
  handleOnClickregister = () => {
    this.setState({redirectRegister: true});
  }
  header = () => {
    let { navigationIcon } =this.state
    navigationIcon==="navigation__icon"? this.setState({navigationIcon:"navigation-open"}) : this.setState({navigationIcon:"navigation__icon"})
  }
  render() {
    if (this.state.redirectLogin) {
      return <Redirect push to="/LoginService" />;
    }
    if (this.state.redirectRegister) {
      return <Redirect push to="/RegisterService" />;
    }
    return (
      <div>
      <header className="header">
        <nav className="navigation">

          <section className={this.state.navigationIcon} onClick={()=>this.header()}>
            <span className="topBar"></span>
            <span className="middleBar"></span>
            <span className="bottomBar"></span>
          

          <ul className="navigation__ul">
            <li><a onClick={this.handleOnClick}>Login</a></li>
            <li><a onClick={this.handleOnClick}>Register</a></li>
          </ul>
<h1>Ranking page</h1>
          <section className="navigation__social">
            <ul className="navigation__social-ul">
              <li>
                <a href="" className="social-icon"></a>
              </li>
              <li>
                <a href="" className="social-icon"></a>
              </li>
              <li>
                <a href="" className="social-icon"></a>
              </li>
              <li>
                <a href="" className="social-icon"></a>
              </li>
            </ul></section>
          </section>
        </nav>
      </header>
        
      </div>
    )
  }
}