import React, { Component } from 'react';
import Items from './Items'

class Results extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        {this.props.items.map( item => {
          return <Items item={item} />
        })}
      </div>
    );
  }
}

export default Results;