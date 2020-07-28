import React from "react";

import "./style/style.css";

const Parent = (props) => {
  console.log(props.children);
  //estructura de datos opacos
  return (
    <div className="box">
      <div className="red"> {props.children[0]} </div>
    </div>
  );
};

const PropChildren = () => {
  return (
    <div>
      <Parent>
        Hijo y Parent
        <div> d</div>
      </Parent>
    </div>
  );
};

export default PropChildren;
