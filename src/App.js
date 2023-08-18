import React, { useState } from "react";

// import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

 function handleResetClick(){
  setSquares(["", "", "", "", "", "", "", "", ""]);
  setPlayer(true);
 }
    //DJ confirmed that I am okay to write the solution regardless of the specific steps outlined.
    
 function calculateWinner(){
 let winningCombinations =  [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  ];
  for(let i = 0; i < winningCombinations.length; i++){
    const [a, b, c] = winningCombinations[i]
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return `${squares[a]} WON!`
    }
  }
  return `“Who will win?”`
};

function handleSquareClick(i){
  if (!squares[i]) {
    //Check if there is a value in squareValue
    const squaresCopy = [...squares]
    if (player) {
      squaresCopy.splice(i, 1, "X"); //change the value of squares at index to “X”
      setSquares(squaresCopy); //invoke the setSquares function passing the new squares array
      setPlayer(!player); //toggle the value of player
    } else {
      squaresCopy.splice(i, 1, "O"); //Otherwise change the value at index to “O”
      setSquares(squaresCopy); //invoke setSquares with the new value of squares
      setPlayer(!player); //toggle the value of player
    }
  }
}

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((squaresValue, i) => {
          return (
            <Square
              key={i}
              squareValue={squaresValue}
              handleClick={() => handleSquareClick(i)}
            />
          );
        })}
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;
