import React from "react";

import './style/style.css'

const HolaMundo = () => {
  const IsTrue = false;
  //const IsTrue = true;
  return (
    <div>
      <img
        src="https://avatars2.githubusercontent.com/u/39895671?s=400&v=4"
        alt="imagen de react"
        className="hola-mundo" 
      />
      {IsTrue ? <h4>Es verdadero</h4> : <h5>Es falso</h5>}
      {IsTrue && <h4>Es verdadero</h4>}
    </div>
  );
};

export default HolaMundo;
