import React from "react";
import "./style.css";

function KeanuCard(props) {
  return (
    <div className="img-container">
      <div className="row">
        <div className="col-md">
          <div className="card" width="18rem">
            <div className="img-container">
              <div className="card-group">
                <div
                  onClick={() => props.clicked(props.id)}
                  className="clickHandler"
                >
                  <img alt={props.name} src={props.image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KeanuCard;
