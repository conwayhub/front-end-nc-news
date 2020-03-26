import React from "react";
import styles from "./ToggleButton.module.css";

class ToggleButton extends React.Component {
  state = { visible: false };

  showComponent = event => {
    this.setState(currentState => {
      return { visible: !currentState.visible };
    });
  };
  render() {
    const { visible } = this.state;
    const { component, children } = this.props;
    return (
      <>
        <button onClick={this.showComponent} className={styles.ToggleButton}>
          {visible ? "Hide" + component : component}
        </button>
        {visible && <div>{children}</div>}
      </>
    );
  }
}

export default ToggleButton;
