import React from 'react';
import Overdrive from 'react-overdrive';

 const page = (props) => (
  <div>
    {props.loading && <Overdrive id="content"></Overdrive>}
    {!props.loading && <Overdrive id="content"></Overdrive>}
  </div>
);