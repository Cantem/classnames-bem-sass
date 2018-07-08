import React from "react";
import cx from "classnames";
import "../styles/components/NumbersOnly.scss";

class NumbersOnly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      value: "",
      cardLength: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const shortString = event.target.value.substring(0, 16);

    this.setState({
      value: shortString,
      error: isNaN(shortString),
      cardLength: shortString.length === 16 && !isNaN(shortString)
    });
  }

  render() {
    const classes = cx("numbers__input", {
      "numbers__input--invalid": this.state.error,
      "numbers__input--valid": this.state.cardLength
    });
    return (
      <div className="numbers">
        <label htmlFor="numbers" className="numbers__label">
          Please enter numbers only
        </label>
        <input
          type="text"
          id="numbers"
          className={classes}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NumbersOnly;
