/* eslint-disable */
import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faAt,
  faBirthdayCake,
  faGlobeEurope
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPhone, faAt, faBirthdayCake, faGlobeEurope);

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <h3>Contacto</h3>
        <div className="box">
          <div className="tlf">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <a href="tel://655923360">655923360</a>
          </div>
          <div className="email">
            <FontAwesomeIcon className="icon" icon={faAt} />
            <a href="mailto:jesusalxen@gmail.com">jesusalxen@gmail.com</a>
          </div>
          <div className="tlf">
            <FontAwesomeIcon className="icon" icon={faBirthdayCake} />
            <a>23/05/1987</a>
          </div>
          <div className="www">
            <FontAwesomeIcon className="icon" icon={faGlobeEurope} />
            <a>jesusgm.github.io</a>
          </div>
          <div className="linkedin">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <a
              href="https://www.linkedin.com/in/jesusgandaramartinez"
              target="_blank"
            >
              jesusgandaramartinez
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
