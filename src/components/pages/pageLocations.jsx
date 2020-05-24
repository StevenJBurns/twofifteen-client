import React from 'react';

class PageLocations extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { locations : [] };
  }

  componentWillMount() {
    fetch('http://twofifteen-api.azurewebsites.net/location' , { mode : "cors" })
      .then(res => res.json())
      .then(json => this.setState({ locations : json }))
      .then(() => console.log(this.state.locations))
      .catch(error => console.log(error))
  }

  render() {
    let locationMap = this.state.locations.map(l => <li key={ l.id }>{ l.city } &bull; { l.stateShort } &bull; { l.countryShort }</li>);

    return (
      <ul>{ locationMap }</ul>
    );
  }
}

export default PageLocations;