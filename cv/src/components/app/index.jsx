import React, { Component } from "react";
import axios from "axios";
import Header from "./components/header";
import ContactInfo from "./components/contact-info";
import Skills from "./components/skills";
import Langs from "./components/langs";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Education from "./components/education";

import "../../../node_modules/bulma/css/bulma.css";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      education: [],
      experience: [],
      skills: []
    };
  }

  componentDidMount() {
    axios.get(`https://jgmcloud.000webhostapp.com/cvapi/`).then(res => {
      const data = res.data;
      this.setState({ ...data });
    });
  }

  render() {
    const { user, skills, experience, education } = this.state;
    if (!user || !experience || !education || !skills) {
      return null;
    }

    return (
      <div className="container box">
        <Header user={user} />
        <section className="content columns">
          <div className="col1 column is-one-third">
            <ContactInfo user={user} />
            {skills && skills.length > 0 ? <Skills skills={skills} /> : null}
            <Langs />
          </div>
          <div className="col2 column">
            <Profile bio={user.bio} bio_ref={user.bio_ref} />
            <Experience experience={experience} />
            <Education education={education} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
