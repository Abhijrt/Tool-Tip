import React from "react";
import Button from "./btn";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "top",
    };
  }

  getDirection = (e) => {
    // console.log(e.target.value);
    this.setState({
      direction: e.target.value,
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
        <Button direction={this.state.direction} />
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
    fontSize: "x-large",
    backgroundColor: "red",
    color: "white",
    borderRadius: "20%",
  },
};

export default DropDown;
