import React from "react";
import "./style.css";

// function randomizekeanuPics(array) {
//   let i = array.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }
// const randomKeanus = randomizekeanuPics(keanuPics);
// {randomKeanus.map((item) => (

//   <div className="card-group">

//   <div className="img-container">
//     <button>
//       <img key={item.id} alt={item.name} src={item.image} />
//     </button>
//   </div>
// ))}
// </div>
function KeanuCard(props) {
  return (
    <div className="card-group">
      <button
        onClick={() => props.handleClick(props.id)}
        className="clickHandler"
      >
        <img alt={props.name} src={props.image} />
      </button>
    </div>
  );
}
export default KeanuCard;

// onClick={this.handleClick(item.id)}
