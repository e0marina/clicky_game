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

    // this.setState({ clicked: true });
    console.log("this is working");
  };

  render() {
    // const clicked = this.state.clicked;
    // if (clicked === true) {
    //   console.log("clicked = true");
    // }
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {/* // Map over this.state.keanuPics and render a KeanuCard component for each keanu object */}
        {this.state.keanuPics.map((keanu) => (
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
