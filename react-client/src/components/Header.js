import React, { Component } from 'react';
import logo from './logo.png';
import './app.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-Container">
       <img  className="logo" src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Header;