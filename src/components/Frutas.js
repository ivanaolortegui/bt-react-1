import React, { Fragment } from "react";

import './style/frutas.css'
const Frutas = () => {
  const listaFrutas = ["🍌", "🍐", "🍉", "🍇", "🍎", "🥭"];
  const productos = {
    frutas: [
      {
        id: 1,
        name: "Banana",
        icon: "🍌",
        price: 3,
      },
      {
        id: 2,
        name: "Pera",
        icon: "🍐",
        price: 6,
      },
      {
        id: 3,
        name: "Sandía",
        icon: "🍉",
        price: 2,
      },
      {
        id: 4,
        name: "Uvas",
        icon: "🍇",
        price: 7,
      },
    ],
  };
  return (
    <Fragment>
      Iterando lista
      <div>
      <ul>
        {listaFrutas.map((fruta) => 
         <li key={fruta}>{fruta}</li>
        )}
      </ul>
      </div>
      
      Iterando lista de Objetos
      {productos.frutas.map((fruta) => {
        return (
          <div key={fruta.id} className='card'>
            ${fruta.price} - {fruta.name} - {fruta.icon}
          </div>
        );
      })}
    </Fragment>
  );
};

export default Frutas;
