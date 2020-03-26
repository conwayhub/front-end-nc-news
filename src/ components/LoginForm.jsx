import React from "react";
import * as api from "../api";
import styles from "./LoginForm.module.css";

class LoginForm extends React.Component {
  state = { user: "jessjelly", error: null };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleSubmit = event => {
    const { user } = this.state;
    event.preventDefault();
    api
      .checkUser(user)
      .then(res => {
        this.props.setUser(res.data.user);
      })
      .catch(err => {
        this.setState({ error: true });
      });
    // this.props.setUser(this.state.user);
  };

  render() {
    const { user, error } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Enter Username:&emsp;
          <input type="text" value={user} onChange={this.handleChange} />
          &emsp;
          <button>LOG IN</button> {error && <>User Not Found</>}
        </label>
      </form>
    );
  }
}

export default LoginForm;
