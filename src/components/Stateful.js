import React, { Component } from "react";

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "HOLA GC",
    };
  }
  render() {
    return <h2>{this.state.nombre}</h2>;
  }
}
export default Stateful;
