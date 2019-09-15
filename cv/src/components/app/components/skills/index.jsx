import React, { Component, Fragment } from "react";
import "./styles.css";

export default class Skills extends Component {
  render() {
    const { skills } = this.props;

    if (skills.length > 0) {
      return (
        <div className="skills">
          <h3>Conocimientos</h3>
          <div className="box">
            {skills.map(skill => {
              return (
                <Fragment key={skill.id}>
                  <span>{skill.name}</span>
                  <progress
                    className="progress is-small"
                    value={skill.percentage}
                    max="100"
                  >
                    {skill.percentage}%
                  </progress>
                </Fragment>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  }
}
