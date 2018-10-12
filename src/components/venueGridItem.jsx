import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Overdrive from 'react-overdrive';

//import Isotope from 'isotope-layout';

// class VenueItem extends Component {
//   constructor(props) {
//     super(props);
//     this.props = {};
//   }

//   render() {
//     return (
//       <div className="grid-item"></div>
//     )
//   }
// }

// export default VenueItem;
 
const page = (props) => (
  <div>
    {props.loading && <Overdrive id="content"></Overdrive>}
    {!props.loading && <Overdrive id="content"></Overdrive>}
  </div>
);