import React from "react";

class ToggleButton extends React.Component {
  state = { visible: false };

  showComponent = () => {
    this.setState(currentState => {
      return { visible: !currentState.visible };
    });
  };
  render() {
    return (
      <>
        {this.state.visible && <div>{this.props.children}</div>}
        <button onClick={this.showComponent}>
          {this.state.visible
            ? "Hide" + this.props.component
            : this.props.component}
        </button>
      </>
    );
  }
}

export default ToggleButton;
