import React, { Component } from "react";
import ToolTip from "./tooltip";

class Button extends Component {
  constructor(props) {
    super(props);
    console.log("Props", props);
    this.state = {
      direction: null,
      showToolTip: false,
    };
  }

  showToolTip = (e) => {
    this.setState({
      direction: this.props.direction,
      showToolTip: true,
    });
  };

  hideToolTip = () => {
    this.setState({
      showToolTip: false,
    });
  };

  render() {
    return (
      <div>
        <div style={styles.downloadBtn}>
          <h1 onMouseEnter={this.showToolTip} onMouseLeave={this.hideToolTip}>
            Download
            {this.state.showToolTip === true ? (
              <ToolTip direction={this.state.direction} />
            ) : null}
          </h1>
        </div>
      </div>
    );
  }
}

const styles = {
  downloadBtn: {
    margin: "auto",
    width: "20%",
    backgroundColor: "red",
    color: "white",
    height: "40px",
    textAlign: "center",
    borderRadius: "80px",
  },
};

export default Button;
