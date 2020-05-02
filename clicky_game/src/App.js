import React from "react";
import KeanuCard from "./components/KeanuCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import keanu1img from "./components/keanu1.jpeg";

const keanuPics = [
  {
    id: 1,
    name: "keanu1",
    image: keanu1img,
    clicked: false,
  },
  {
    id: 2,
    name: "keanu2",
    image:
      "https://3apq7g38q3kw2yn3fx4bojii-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/1149382972_Keanu-reeves-e1574089897804-750x500.jpg",
    clicked: false,
  },
  {
    id: 3,
    name: "keanu3",
    image:
      "https://3apq7g38q3kw2yn3fx4bojii-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/1149382972_Keanu-reeves-e1574089897804-750x500.jpg",
    clicked: false,
  },
];

function App() {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <KeanuCard keanuPics={keanuPics} />
    </Wrapper>
  );
}

export default App;
