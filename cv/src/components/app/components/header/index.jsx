import React, { Component } from "react";
import profileImage from "./profileimage.jpeg";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <section className="header columns">
        <div className="profile-image column is-one-third">
          <img src={profileImage} alt="Jesús Gándara Martínez" />
        </div>
        <div className="info">
          <h1 className="full-name title">Jesús Gándara Martínez</h1>
          <h2 className="job subtitle">
            <strong>Desarrollador sénior</strong> en{" "}
            <a
              href="https://www.atsistemas.com/"
              target="_black"
              alt="AtSistemas"
            >
              atSistemas
            </a>
          </h2>
        </div>
      </section>
    );
  }
}

export default Header;
