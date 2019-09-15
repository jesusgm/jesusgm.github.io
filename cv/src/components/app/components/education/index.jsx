import React from "react";
import "./styles.css";

const Education = ({ education }) => (
  <div>
    <h3>Estudios</h3>
    <div className="education-data">
      {education.map(edu => {
        return (
          <div className="education-item" key={edu.id}>
            <div className="dates">{`${edu.start} - ${edu.end}`}</div>
            <div className="explanation">
              <h4>{edu.title}</h4>
              <p>{edu.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Education;
