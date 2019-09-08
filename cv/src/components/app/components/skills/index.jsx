import React, { Component } from "react";
import "./styles.css";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h3>Conocimientos</h3>
        <div className="box">
          <span>HTML5 + CSS</span>
          <progress class="progress is-small" value="90" max="100">
            90%
          </progress>
          <span>JavaScript</span>
          <progress class="progress is-small" value="90" max="100">
            90%
          </progress>
          <span>React</span>
          <progress class="progress is-small" value="95" max="100">
            95%
          </progress>
          <span>Express js</span>
          <progress class="progress is-small" value="85" max="100">
            85%
          </progress>
          <span>GIT</span>
          <progress class="progress is-small" value="80" max="100">
            80%
          </progress>
          <span>PHP</span>
          <progress class="progress is-small" value="60" max="100">
            60%
          </progress>
          <span>Prestashop</span>
          <progress class="progress is-small" value="80" max="100">
            80%
          </progress>
        </div>
      </div>
    );
  }
}
