import React from "react";


export const OnThisDay = (props) => {
  const today = new Date().toDateString();

  return (
    <React.Fragment>
      <h3>{today}</h3>
    </React.Fragment>
  );
}