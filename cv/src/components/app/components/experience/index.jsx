import React from "react";
import "./styles.css";

const Experience = ({ experience }) => (
  <div>
    <h3>Experiencia</h3>
    <div className="experience-data">
      {experience.map(exp => {
        return (
          <div className="experience-item" key={exp.id}>
            <div className="dates">{`${exp.start} - ${exp.end}`}</div>
            <div className="explanation">
              <h4>{exp.title}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Experience;
