import React from "react";
import "./style.css";

class ScoreCard extends React.Component {
  state = {
    score: 0,
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-text">Score: {this.state.score}</span>
      </nav>
    );
  }
}

export default ScoreCard;
