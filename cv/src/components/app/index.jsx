import React from "react";
import Header from "./components/header";
import ContactInfo from "./components/contact-info";
import Skills from "./components/skills";
import Langs from "./components/langs";
import "../../../node_modules/bulma/css/bulma.css";
import "./style.css";

function App() {
  return (
    <div className="container box">
      <Header />
      <section className="content columns">
        <div className="col1 column is-one-third">
          <ContactInfo />
          <Skills />
          <Langs />
        </div>
        <div className="col2 column"></div>
      </section>
    </div>
  );
}

export default App;
