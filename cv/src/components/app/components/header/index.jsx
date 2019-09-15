import React, { Component } from "react";
import profileImage from "./profileimage.jpeg";
import "./styles.css";

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <section className="header columns">
        <div className="profile-image column is-one-third">
          <img src={profileImage} alt={user.fullname} />
        </div>
        <div className="info">
          <h1 className="full-name title">{user.fullname}</h1>
          <h2 className="job subtitle">
            <strong>{user.job}</strong> en{" "}
            <a href={user.company_url} target="_black" alt={user.company}>
              {user.company}
            </a>
          </h2>
        </div>
      </section>
    );
  }
}

export default Header;
