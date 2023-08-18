import React from "react";

const Square = (props) => {
  return(
    <div className="square" onClick={props.handleClick}>
      {props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}
    </div>
  )
};

export default Square;