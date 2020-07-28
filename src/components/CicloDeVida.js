import React, { Component } from "react";

class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { data: [{ nombre: this.props.color }] };
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    this.setTimeoutId = setTimeout(
      () =>
        this.setState({
          data: [{ nombre: "Ivana" }],
        }),
      3000
    );
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
    console.log({ preProps: prevProps, prevState: prevState });
    console.log(prevState);
    console.log({ state: this.state });
  };
  componentWillUnmount() {
    clearTimeout(this.setTimeoutId);
  }
  onsetData = () => {
    console.log("click");
    console.log(this.setTimeoutId);
    this.setState((state) => ({
      data: [{ nombre: "flac" }],
    }));
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.data[0].nombre}</h1>
        <p>Ciclo de Vida</p>
      </div>
    );
  }
}

export default CicloDeVida;
