import React from "react";
import "./style.css";

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

function KeanuCard({ keanuPics }) {
  const randomKeanus = randomizekeanuPics(keanuPics);
  return (
    <div className="card-group">
      {randomKeanus.map((item) => (
        <div className="img-container">
          <button>
            <img key={item.id} alt={item.name} src={item.image} />
          </button>
        </div>
      ))}
    </div>
  );
}
export default KeanuCard;

// onClick={this.handleClick(item.id)}
