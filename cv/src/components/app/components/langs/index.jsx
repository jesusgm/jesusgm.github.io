import React, { Component } from "react";
import "./styles.css";

class Langs extends Component {
  render() {
    return (
      <div className="skills">
        <h3>Idiomas</h3>
        <div className="box">
          <span>Español</span>
          <progress className="progress is-small" value="100" max="100">
            100%
          </progress>
          <span>Gallego</span>
          <progress className="progress is-small" value="100" max="100">
            100%
          </progress>
          <span>Inglés</span>
          <progress className="progress is-small" value="50" max="100">
            50%
          </progress>
        </div>
      </div>
    );
  }
}

export default Langs;
