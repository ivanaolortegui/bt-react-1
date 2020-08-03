import React from "react";
import PropTypes from "prop-types";

const noop = () => {};
const Profile = (props) => {
  const saludar = () => {
    props.onHello();
  };
  const { name, bio, email } = props;
  return (
    <div>
      <h1> {name}</h1>
      <p>{bio}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <button onClick={saludar}> Saludar </button>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  email: PropTypes.string,
};
Profile.defaultProps = {
  name: "Nombre",
  onHello: noop,
};

const PropType = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          name="ivana"
          bio="Soy frontend"
          email="olorteguimor@gmail.com"
        />
      </header>
    </div>
  );
};

export default PropType;
