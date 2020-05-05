import React from "react";
import "./style.css";

function KeanuCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <div className="card-group">
          <div onClick={() => props.clicked(props.id)} className="clickHandler">
            <img alt={props.name} src={props.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default KeanuCard;
