import React from "react";
import * as api from "../api";
import styles from "./LoginForm.module.css";


class LoginForm extends React.Component {
  state = { user: "jessjelly", error: null };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .checkUser(this.state.user)
      .then(res => {
        this.props.setUser(res.data.user);
      })
      .catch(err => {
        this.setState({ error: true });
      });
    // this.props.setUser(this.state.user);
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Enter Username:{" "}
          <input
            type="text"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </label>
        {this.state.error && <p>User Not Found</p>}
      </form>
    );
  }
}

export default LoginForm;
