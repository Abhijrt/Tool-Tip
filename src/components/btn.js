import React, { Component } from "react";
// importing the tooltip component
import ToolTip from "./tooltip";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: null,
      showToolTip: false,
      showDownloadBtn: false,
    };
  }

  // function for showing the tooltip
  showToolTip = (e) => {
    this.setState({
      direction: this.props.direction,
      showToolTip: true,
      showDownloadBtn: true,
    });
  };

  // function for hidding the tooltip
  hideToolTip = () => {
    this.setState({
      showToolTip: false,
      showDownloadBtn: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.showDownloadBtn === true ? (
          <div style={styles.downloadBtnIcon}>
            <h1 onMouseEnter={this.showToolTip} onMouseLeave={this.hideToolTip}>
              <i class="fas fa-download"> </i>
              {/* showing the tooltip */}
              {this.state.showToolTip === true ? (
                <ToolTip
                  direction={this.state.direction}
                  showDownloadBtn={this.state.showDownloadBtn}
                />
              ) : null}
            </h1>
          </div>
        ) : (
          <div style={styles.downloadBtn}>
            <h1 onMouseEnter={this.showToolTip} onMouseLeave={this.hideToolTip}>
              Download
              {/* showing the tooltip */}
              {this.state.showToolTip === true ? (
                <ToolTip
                  direction={this.state.direction}
                  showDownloadBtn={this.state.showDownloadBtn}
                />
              ) : null}
            </h1>
          </div>
        )}
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
  downloadBtnIcon: {
    margin: "auto",
    width: "20%",
    backgroundColor: "#4aaee3",
    color: "white",
    height: "40px",
    textAlign: "center",
    borderRadius: "80px",
  },
};

export default Button;
