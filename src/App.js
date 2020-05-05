import React, { Component } from "react";
import KeanuCard from "./components/KeanuCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import keanuPics from "./keanus.json";

class App extends Component {
  //setting this.state.keanuPics to the keanus json array
  state = {
    keanuPics,
  };

  handleClick = (id) => {
    //when an image is clicked, the keanuPics property clicked is set to true
    this.setState({ clicked: true });
    console.log("clicked set to true");
  };

  render() {
    const clicked = this.state.clicked;
    if (clicked === true) {
      // console.log("clicked = true");
    }
    //create func that handles making the pics render randomly
    function randomizekeanuPics(array) {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {/* // Map over this.state.keanuPics and render a KeanuCard component for each keanu object */}

        {randomizekeanuPics(this.state.keanuPics).map((keanu) => (
          <KeanuCard
            clicked={this.handleClick}
            id={keanu.id}
            key={keanu.id}
            name={keanu.name}
            image={keanu.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
