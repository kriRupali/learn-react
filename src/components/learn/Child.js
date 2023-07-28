import React, { useState } from "react";
import PropTypes from "prop-types";

const Child = (props) => {
  const [name, setName] = useState("Rupali");

  return (
    <div>
      <div>{name}</div>
      <div>Name : {props.name}</div>
      <div>Age : {props.age}</div>
    </div>
  );
};

//! Default Props
Child.defaultProps = {
  name: "Default Name",
  age: 20,
};

//! Props "types" Validation
Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Child;
