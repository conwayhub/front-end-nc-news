import React from "react";

class LoginForm extends React.Component {
  state = { user: "" };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setUser(this.state.user);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Username:{" "}
          <input
            type="text"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </label>
      </form>
    );
  }
}

export default LoginForm;
