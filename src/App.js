import React, { Component } from "react";
import KeanuCard from "./components/KeanuCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreCard from "./components/ScoreCard";
import keanuPics from "./keanus.json";

class App extends Component {
  //setting this.state.keanuPics to the keanus json array
  state = {
    keanuPics,
    score: 0,
    highScore: 0,
  };

  handleClick = (id) => {
    // this === App which has state.
    //when an image is clicked, the keanuPics property clicked is set to true
    // console.log(id);
    //set entire keanupics array again bc react
    let isAlreadyClicked = false;
    const newkeanuPics = this.state.keanuPics.map((keanuImg) => {
      if (keanuImg.id === id) {
        isAlreadyClicked = keanuImg.clicked;
        return {
          ...keanuImg,
          clicked: true,
        };
      } else {
        return keanuImg;
      }
    });
    this.setState({ keanuPics: newkeanuPics });

    //const newpics = [...this.state.keanuPics];
    //const keanuIndex = this.state.keanuPics.findIndex((keanu) => keanu.id === id);
    //newpics[keanuIndex].clicked = true;
    // this.setState({ keanuPics: newpics})

    if (isAlreadyClicked) {
      this.setState({ score: 0 });
      this.setState({ keanuPics: keanuPics });
    } else {
      this.handleIncrement();
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
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
        <ScoreCard>Score: {this.state.score}</ScoreCard>
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
