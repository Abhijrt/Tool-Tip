import React, { Component } from "react";
// importing the tooltip component
import ToolTip from "./tooltip";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: null,
      showToolTip: false,
    };
  }

  // function for showing the tooltip
  showToolTip = (e) => {
    this.setState({
      direction: this.props.direction,
      showToolTip: true,
    });
  };

  // function for hidding the tooltip
  hideToolTip = () => {
    this.setState({
      showToolTip: false,
    });
  };

  render() {
    return (
      <div>
        <div style={styles.downloadBtn}>
          {/* calling the function for showing and hiding the tooltip */}
          <h1 onMouseEnter={this.showToolTip} onMouseLeave={this.hideToolTip}>
            Download
            {/* showing the tooltip */}
            {this.state.showToolTip === true ? (
              <ToolTip direction={this.state.direction} />
            ) : null}
          </h1>
        </div>
      </div>
    );
  }
}

// design for the Button download
const styles = {
  downloadBtn: {
    margin: "auto",
    width: "20%",
    backgroundColor: "#0c7bfe",
    color: "white",
    height: "40px",
    textAlign: "center",
    borderRadius: "80px",
  },
};

export default Button;
