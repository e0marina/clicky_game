import React, { Component } from "react";
import KeanuCard from "./components/KeanuCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import keanu1Img from "./components/keanu1.jpeg";
import keanu2Img from "./components/keaunu2.jpeg";
import keanu3Img from "./components/keanu3.jpeg";
import keanu4Img from "./components/keanu4.jpg";
import keanu5Img from "./components/keanu5jpg.jpg";
import keanu6Img from "./components/keanu6.jpg";
import keanu7Img from "./components/keanu7.jpg";
import keanu8Img from "./components/keanu8.jpeg";
import keanu9Img from "./components/keanu9.jpg";
import keanu10Img from "./components/keanu10.jpg";
import keanu11Img from "./components/keanu11.jpg";
import keanu12Img from "./components/keanu12.jpg";

const keanuPics = [
  {
    id: 1,
    name: "keanu1",
    image: keanu1Img,
    clicked: false,
  },
  {
    id: 2,
    name: "keanu2",
    image: keanu2Img,
    clicked: false,
  },
  {
    id: 3,
    name: "keanu3",
    image: keanu3Img,
    clicked: false,
  },
  {
    id: 4,
    name: "keanu4",
    image: keanu4Img,
    clicked: false,
  },
  {
    id: 5,
    name: "keanu5",
    image: keanu5Img,
    clicked: false,
  },
  {
    id: 6,
    name: "keanu6",
    image: keanu6Img,
    clicked: false,
  },
  {
    id: 7,
    name: "keanu7",
    image: keanu7Img,
    clicked: false,
  },
  {
    id: 8,
    name: "keanu8",
    image: keanu8Img,
    clicked: false,
  },
  {
    id: 9,
    name: "keanu9",
    image: keanu9Img,
    clicked: false,
  },
  {
    id: 10,
    name: "keanu10",
    image: keanu10Img,
    clicked: false,
  },
  {
    id: 11,
    name: "keanu11",
    image: keanu11Img,
    clicked: false,
  },
  {
    id: 12,
    name: "keanu12",
    image: keanu12Img,
    clicked: false,
  },
];

class App extends Component {
  //setting this.state.keanuPics to the array of keanuPics
  state = {
    keanuPics,
  };

  handleImgClick = () => {
    //when an image is clicked, the keanuPics property clicked is changed to true
    // event.preventDefault();
    this.setState({ clicked: true });
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
