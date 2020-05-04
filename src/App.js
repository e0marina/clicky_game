import React, { Component } from "react";
import KeanuCard from "./components/KeanuCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import keanuPics from "./keanus.json";

class App extends Component {
  //setting this.state.keanuPics to the array of keanuPics
  state = {
    keanuPics,
  };

  handleClick = (event) => {
    //when an image is clicked, the keanuPics property clicked is changed to true
    event.preventDefault();
    return this.setState({ clicked: true });
  };
  render() {
    const clicked = this.state.clicked;
    if (clicked === true) {
      console.log("clicked = true");
    }
    return (
      <Wrapper>
        <Title>Clicky Game</Title>

        <KeanuCard keanuPics={keanuPics} />
      </Wrapper>
    );
  }
}

export default App;
