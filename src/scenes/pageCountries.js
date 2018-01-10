import React, { Component } from 'react';

class SceneCountries extends Component {
  
  constructor(props) {
    super(props);
    this.state = { countries : [] };
  }

  componentWillMount() {
    fetch('http://twofifteen-api.azurewebsites.net/country' , { mode : "cors" })
      .then(res => res.json())
      .then(json => this.setState({ countries : json }))
      .then( () => console.log(this.state.countries))
      .catch(error => console.log(error))
  }

  render() {
    let countryMap = this.state.countries.map(c => <li key={ c.name }>{c.name}</li>);

    return (
      <ul>{ countryMap }</ul>
    );
  }
}

export default SceneCountries;