import React from "react";
import cx from "classnames";

import "../styles/components/VotingButtons.scss";

class VotingButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.initial
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <div className="buttons">
        {this.props.buttons.map((item, index) => {
          return (
            <button
              key={item}
              item={item}
              className={cx("buttons__btn", {
                "buttons__btn--selected": index === this.state.selected
              })}
              onClick={() => this.handleClick(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

export default VotingButtons;
