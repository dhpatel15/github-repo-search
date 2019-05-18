import React, { Component } from 'react';
import './app.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (

      <div className="row">
  
        <div className="name">
          <a href={this.props.item.html_url} className="title">{this.props.item.full_name}</a>
          <span className="description">{this.props.item.description}</span>
        </div>
        
        <div className="star">
          <span className="label">Stars:</span>
          <span className="stars">{this.props.item.stargazers_count}</span>
        </div>
        
        <div className="license">
          <span className="label">License:</span>
          <span className="licenses">{this.props.item.license.name}</span>
        </div>
        
      </div>
    );
  }
}

export default Item;
