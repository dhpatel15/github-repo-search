import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';
import Results from './components/Results';
import Header from './components/Header';
import Footer from './components/Footer';

import axios from 'axios';
import './components/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      error: false
    }

    this.getAPI = this.getAPI.bind(this)
  }

  componentDidMount(){
    document.body.style.margin = "0";
  }

  getAPI(query, stars, license, forked){
    let q =`https://api.github.com/search/repositories?q=${query}+stars%3A${stars}+license%3A${license}+fork%3A${forked}&type=Repositories`

    axios.get(q)
    .then((response) =>  {
      console.log(response)
      if(response.data.items.length >= 1){
        this.setState({ items : response.data.items })
      }else{
        this.setState({ error : true })
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }


  render () {
    return (
    <div className="page"> 
      <Header />
      <Form getAPI={this.getAPI} items={this.state.items}/>
      {this.state.items.length === 0 ? 
        (this.state.error === false ? 
        <div>Please enter query and click SEARCH above, results appread here.</div> : 
        <div>0 result</div>) : 
        <Results items={this.state.items} /> }
      <Footer />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));