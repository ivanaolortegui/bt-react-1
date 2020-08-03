import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
//importacion de Components

import Stateful from "./components/Stateful";
import Stateless from "./components/Stateless";
import HolaMundo from "./components/HolaMundo";
import Button from "./components/Button";
import Tienda from "./components/Tienda";
import PropType from "./components/PropType";
import Frutas from "./components/Frutas";
import PropChildren from "./components/PropChildren";
import ManejoDeEstado from "./components/ManejoDeEstado";
import OcultarComponente from "./components/CicloDeVida";

ReactDOM.render(
  <React.StrictMode>
    ----Stateful----
    <br />
    <Stateful />
    <br />
    ----Stateless----
    <br />
    <Stateless />
    <br />
    ------JSX------
    <br />
    <HolaMundo />
    <br />
    ----Props-----
    <br />
    <Button text="Hola soy un prop"/>
   
    <br />
    -----Prop Children------
    <br />
    <PropChildren />
    <br/>
    ------PropTypes------
    <br />
    <PropType /> 
    <br />
    ---Manejo de estados y eventos---
    <br />
    <ManejoDeEstado />
    <br />
    ------Fragments------
    <Tienda />
    <br />
    
    ---------Iteración de listas--------
    <br />
    <Frutas />
    <br />
    ---------Ciclo de vida---------
    <br />
    <OcultarComponente/>
    <br />
   
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
