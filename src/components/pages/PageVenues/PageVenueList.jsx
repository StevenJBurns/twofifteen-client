import React from 'react';
import { Page } from '../Page/Page';

// import Background from '../images/ballparks.jpg';
// import Anaheim from '../images/anaheim.jpg';
// import Arlington from '../images/arlington.jpg';
// import SanFran from '../images/sanfran.jpg';
// import StLouis from '../images/stlouis.jpg';
// import Phoenix from '../images/phoenix.jpg';
// import Queens from '../images/queens.jpg';
// import Philly from '../images/philly.jpg';
// import Detroit from '../images/detroit.jpg';
// import Baltimore from '../images/baltimore.jpg';
// import LA from '../images/la.jpg';
// import Cincinnati from '../images/cincinnati.jpg';
// import ChicagoS from '../images/chicago-s.jpg';
// import KC from '../images/kc.jpg';
// import Miami from '../images/miami.jpg';
// import Milwaukee from '../images/milwaukee.jpg';
// import Houston from '../images/houston.jpg';
// import Washington from '../images/washington.jpg';
// import Boston from '../images/boston.jpg';
// import Seattle from '../images/seattle.jpg';
// import Oakland from '../images/oakland.jpg';
// import SanDiego from '../images/sandiego.jpg';
// import Pittsburgh from '../images/pittsburgh.jpg';
// import Cleveland from '../images/cleveland.jpg';
// import Toronto from '../images/toronto.jpg';
// import Minnesota from '../images/minnesota.jpg';
// import Atlanta from '../images/atlanta.jpg';
// import Tampa from '../images/tampa.jpg';
// import ChicagoN from '../images/chicago-n.jpg';
// import Bronx from '../images/bronx.jpg';

export const PageVenues = () => {
  const [venues, setVenues] = React.useState([]);

  const api_url = "http://twofifteen-api.azurewebsites.net/venue";

  React.useEffect(() => {    
    const getVenues = async () => {
      fetch(api_url) //{ mode : "cors" }
      .then(res => res.json())
      .then(json => this.setState({ venues : json }))
      .catch(err => console.error(err));
    };
    getVenues();
  }, []);

  return (
    <Page className="page-ballparks">
      <div className="div-venues-content"></div>
    </Page>
  );
};
