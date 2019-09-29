import React, { Component } from "react";
import axios from "axios";
import Header from "./components/header";
import ContactInfo from "./components/contact-info";
import Skills from "./components/skills";
import Langs from "./components/langs";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Education from "./components/education";
import MyTagCloud from "./components/tag-cloud";
import ReactGA from "react-ga";

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
    ReactGA.initialize("UA-148892916-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

    axios
      .get(`//jgmcloud.000webhostapp.com/cvapi/`, { mode: "cors" })
      .then(res => {
        const data = res.data;
        this.setState({
          ...data
        });
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
            <Skills
              skills={skills.filter(s => s.skill === "1" && s.percentage >= 75)}
            />
            <Langs />
          </div>
          <div className="col2 column">
            <Profile bio={user.bio} bio_ref={user.bio_ref} />
            <Experience experience={experience} />
            <Education education={education} />
            <MyTagCloud tags={skills.filter(s => s.tags === "1")} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
