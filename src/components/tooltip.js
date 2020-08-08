import React, { Component } from "react";

class tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: this.props.direction,
    };
  }

  render() {
    // console.log("direction In tootltip", this.state.direction);
    // returning the tooltip accoring to the direction
    if (this.state.direction === "top") {
      return (
        <div>
          <div style={styles.rotateTop}>
            <span>50 MB File Size Top</span>
          </div>
        </div>
      );
    } else if (this.state.direction === "bottom") {
      return (
        <div>
          <div style={styles.rotateBottom}>
            <span>50 MB File Size Bottom</span>
          </div>
        </div>
      );
    } else if (this.state.direction === "left") {
      return (
        <div>
          <div style={styles.rotateLeft}>
            <span>50 MB File Size Left</span>
          </div>
        </div>
      );
    } else if (this.state.direction === "right") {
      return (
        <div>
          <div style={styles.rotateRight}>
            <span>50 MB File Size Right</span>
          </div>
        </div>
      );
    }
  }
}

// style for the tooltip according to the direction
const styles = {
  rotateBottom: {
    margin: "auto",
    width: "20%",
    height: "auto",
    backgroundColor: "black",
    fontSize: "xx-large",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "20px",
    color: "white",
    textAlign: "center",
    position: "absolute",
  },
  rotateTop: {
    margin: "auto",
    width: "20%",
    height: "auto",
    backgroundColor: "black",
    fontSize: "xx-large",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "-120px",
    color: "white",
    textAlign: "center",
    position: "absolute",
  },
  rotateLeft: {
    width: "20%",
    height: "auto",
    backgroundColor: "black",
    fontSize: "xx-large",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "-50px",
    color: "white",
    textAlign: "center",
    position: "absolute",
    marginLeft: "-25%",
  },
  rotateRight: {
    width: "20%",
    height: "auto",
    backgroundColor: "black",
    fontSize: "xx-large",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "-70px",
    color: "white",
    textAlign: "center",
    position: "absolute",
    marginLeft: "25%",
  },
};

export default tooltip;
