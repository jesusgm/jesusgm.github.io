/* eslint-disable */
import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faAt,
  faBirthdayCake,
  faGlobeEurope,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import "./styles.css";

library.add(fab, faPhone, faAt, faBirthdayCake, faGlobeEurope, faSpinner);

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      loading: false,
      name: "",
      email: "",
      comment: ""
    };

    this.renderForm = this.renderForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    var config = {
      params: {
        // data: btoa(
        //   JSON.stringify({
        //     name: this.state.name,
        //     email: this.state.email,
        //     comment: this.state.comment
        //   })
        // )
        data: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          comment: this.state.comment
        })
      },
      mode: "cors"
    };

    axios
      .get(`//jgmcloud.000webhostapp.com/cvapi/contact`, config)
      .then(res => {
        const data = res.data;
        this.setState({
          loading: false,
          showForm: false,
          name: "",
          email: "",
          comment: ""
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  }

  closeModal(event) {
    this.setState({ showForm: false });
    event.stopPropagation();
  }

  renderForm() {
    const { loading } = this.state;

    return (
      <div className="modal form-container is-active">
        <div className="modal-background"></div>
        <div className="modal-card form">
          <form onSubmit={this.handleSubmit}>
            <header className="modal-card-head">
              <div className="modal-card-title">Contactar</div>
              <button
                className="delete"
                aria-label="close"
                onClick={this.closeModal}
              ></button>
            </header>
            {loading ? (
              <section className="modal-card-body">
                <div className="is-loading">
                  <FontAwesomeIcon icon="spinner" size="4x" pulse />
                </div>
              </section>
            ) : (
              <section className="modal-card-body">
                <div className="field">
                  <label className="label">Nombre</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={this.state.name}
                      onChange={event =>
                        this.setState({
                          name: event.target.value
                        })
                      }
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={this.state.email}
                      onChange={event =>
                        this.setState({
                          email: event.target.value
                        })
                      }
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">
                    Cuéntame por qué quieres contactarme
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      type="text"
                      value={this.state.comment}
                      onChange={event =>
                        this.setState({
                          comment: event.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </section>
            )}
            <footer className="modal-card-foot">
              <button className="button is-text" onClick={this.closeModal}>
                Cancelar
              </button>
              <button className="button is-dark" type="submit">
                Enviar
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }

  render() {
    const { user } = this.props;
    const { showForm } = this.state;

    return (
      <div className="contact-info">
        <h3>Datos personales</h3>
        <div className="box">
          <div className="tlf">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            {/* <a href={`tel://${user.phone}`}>{user.phone}</a> */}
            <a onClick={() => this.setState({ showForm: true })}>6xx xxx xxx</a>
          </div>
          <div className="email">
            <FontAwesomeIcon className="icon" icon={faAt} />
            {/* <a href={`mailto:${user.email}`}>{user.email}</a> */}
            <a onClick={() => this.setState({ showForm: true })}>
              jxxxxxxx@xxx.com
            </a>
          </div>
          <div className="www">
            <FontAwesomeIcon className="icon" icon={faGlobeEurope} />
            <a href={user.siteurl} target="_black">
              {user.sitename}
            </a>
          </div>
          <div className="linkedin">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <a href={user.linkedinurl} target="_blank">
              {user.linkedinuser}
            </a>
          </div>
          <div className="birthday">
            <FontAwesomeIcon className="icon" icon={faBirthdayCake} />
            <a>{user.birthday}</a>
          </div>
        </div>
        {showForm ? this.renderForm() : null}
      </div>
    );
  }
}

export default ContactInfo;
