import React, { Component } from "react";

class tooltip extends Component {
  constructor(props) {
    super(props);
    console.log("Props", props);
    this.state = {
      direction: this.props.direction,
      showToolTip: false,
    };
  }

  showToolTip = (e) => {
    console.log("state", this.state.direction);
  };

  render() {
    console.log("proprs", this.state.props);
    console.log("direction", this.state.direction);
    return (
      <div>
        <div style={styles.tooltip}>
          <span>50 MB File Size</span>
        </div>
      </div>
    );
  }
}

const styles = {
  tooltip: {
    margin: "auto",
    width: "100%",
    height: "auto",
    backgroundColor: "black",
    fontSize: "xx-large",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "20px",
    color: "white",
    textAlign: "center",
  },
};

export default tooltip;
