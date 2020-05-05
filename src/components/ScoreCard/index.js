import React from "react";
import "./style.css";

function ScoreCard(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-text">{props.children}</span>
    </nav>
  );
}

export default ScoreCard;
