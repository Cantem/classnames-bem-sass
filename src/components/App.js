import React from "react";
import NumbersOnly from "./NumbersOnly";
import VotingButtons from "./VotingButtons";

class App extends React.Component {
  constructor() {
    super();

    this.labelIndex = 3;
    this.teamIndex = 1;
  }

  render() {
    const teams = ["Spain", "France", "Uruguay", "Russia", "England"];
    const labels = ["camel", "duck", "donut", "potato", "mash"];
    return (
      <div>
        <NumbersOnly />
        <VotingButtons buttons={teams} initial={this.labelIndex} />
        <VotingButtons buttons={labels} initial={this.teamIndex} />
      </div>
    );
  }
}

export default App;
