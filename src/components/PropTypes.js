import React, { Component } from "react";
import propTypes from "prop-types";

const noop = () => {};

class Profile extends Component {
  static propTypes = {
    name: propTypes.string,
    bio: propTypes.string,
    email: propTypes.string,
  };

  static defaultProps = {
    name: "Nombre",
    onHello: noop,
  };

  saludar = () => {
    this.props.onHello();
  };
  render() {
    const { name, bio, email } = this.props;
    return (
      <div>
        <h1> {name}</h1>
        <p>{bio}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <button onClick={this.saludar}> Saludar </button>
      </div>
    );
  }
}

function PropTypes() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Profile
          name="ivana"
          bio="Soy fronent"
          email="olorteguimor@gmail.com"
        />
      </header>
    </div>
  );
}

export default PropTypes;
