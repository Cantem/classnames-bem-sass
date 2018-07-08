import React from "react";
import cx from "classnames";

import "../styles/components/CountrySelector.scss";

class CountrySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      value: ""
    };
  }

  handleBlur()

  handleFocus()

  handleMouseDown()

  render() {
    return 
    <div className="countries">
          <input value={this.state.value} />
          <ul>
            <li>
              Great Britain
            </li>
            <li>
              USA
            </li>
          </ul>
    
    
    
    </div>;
  }
}
