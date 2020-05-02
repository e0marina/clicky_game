import React from "react";
import "./style.css";

function KeanuCard(props) {
  return (
    <div className="card-group">
      {props.keanuPics.map((item) => (
        <div className="img-container">
          <div className="card" key={item.id}>
            <img alt={props.name} src={props.image} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default KeanuCard;
