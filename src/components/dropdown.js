import React from "react";
import ToolTip from "./tooltip";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "",
    };
  }

  getDirection = (e) => {
    console.log(e.target.value);
    this.setState({
      direction: e.target.direction,
    });
  };
  render() {
    return (
      <div>
        <div style={styles.mainContainer}>
          <div style={styles.dropDownContainer}>
            <select style={styles.container} onChange={this.getDirection}>
              <option defaultValue value="top">
                Top
              </option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
        <ToolTip direction={this.direction} />
      </div>
    );
  }
}

const styles = {
  mainContainer: {
    height: "20vh",
    backgroundColor: "antiquewhite",
    margin: "15vh",
  },
  dropDownContainer: {
    margin: "auto",
    width: "10%",
    height: "10vh",
  },
  container: {
    height: "80%",
    width: "100%",
    fontSize: "large",
    backgroundColor: "red",
    color: "white",
  },
};

export default DropDown;
