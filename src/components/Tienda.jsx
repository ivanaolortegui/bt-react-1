import React, { Fragment } from "react";

const Computo = () => {
  return (
    <Fragment>
      <li>Mouse</li>
      <li>Teclado</li>
      <li>Airpods</li>
    </Fragment>
  );
};                  

const Ropa = () => {
  return (
    <>
      <li>Camisa</li>
      <li>Chompa</li>
      <li>Sueter</li>
    </>
  );
};

const Tienda = () => {
  return (
    <div>
      <ul>
        <Computo />
        <Ropa />
      </ul>
    </div>
  );
};

export default Tienda;