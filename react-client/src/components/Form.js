import React from 'react';
import { timingSafeEqual } from 'crypto';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      repoText: "",
      stars: '',
      license: 'apache-2.0',
      checked: false,
      repoError: "",
      starsError: "",
    };
    
    this.onRepoInputChange = this.onRepoInputChange.bind(this)
    this.onStarInputChange = this.onStarInputChange.bind(this)
    this.onLicenseChange = this.onLicenseChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onRepoInputChange(event){
    this.setState({ repoText : event.target.value })
  }

  onStarInputChange(event){
    let temp =  event.target.value.charAt(event.target.value.length-1)
    var regex = new RegExp("^[0-9-!@#$%*?<>=.]");
    if (regex.test(temp)) {
      this.setState({ stars : event.target.value })
    }
  }

  onLicenseChange(event){
    this.setState({ license : event.target.value })
  }

  handleCheck(event){
    this.setState({ checked : !this.state.checked })
  }

  validate(){
    if(this.state.repoText.length === 0){
      let repoError = "Please enter Repository name"
      this.setState({ repoError })
      return false
    }

    if(this.state.stars.length === 0){
      let starsError = "Please enter Stars"
      this.setState({ starsError })
      return false
    }

    return true
  }

  clearErrorMessage(){
    this.setState({
      repoError: "",
      starsError: "",
    })
  }

  checkStars(str){
    var temp = str.replace("=", "%3D");
    return temp
  }

  onSubmit(event){
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      let temp  = this.state.repoText.split(" ").join("+")
      let temp2 = this.checkStars(this.state.stars)
      this.props.getAPI(temp, this.state.stars, this.state.license, this.state.checked)
      this.clearErrorMessage()
    }
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <h1>Even Financial GitHub Repository Search</h1>
          <div  className="header">
          <div className="input" >
            <div >Text</div>
              <input
              type="text"
              value={this.state.repoText}
              placeholder={"Repo Name"}
              onChange={this.onRepoInputChange}
            />
            <div>{this.state.repoError}</div>
          </div>

          <div  className="input">
            <div>Stars</div>
            <input
              type="text"
              value={this.state.stars}
              placeholder={">100"}
              onChange={this.onStarInputChange}
            />
            <div>{this.state.starsError}</div>
          </div>

          <div  className="input">
            <select id="lang" onChange={this.onLicenseChange} value={this.state.license}>
              <option value="mit">MIT</option>
              <option value="isc">ISC</option>
              <option value="gpl">GNU General Public License family</option>
              <option value="apache-2.0">Apache license 2.0</option>
            </select>
          </div>

          <span  className="input">
            <label>
              <input
                type="checkbox"
                checked={this.state.checked}
                ref="complete"
                onChange={this.handleCheck}
              />
              Forked
            </label>
          </span>
        
          </div>
        </div>
        <input type="submit" value="Search" />
      </form>
    )
  }
}


export default Form;