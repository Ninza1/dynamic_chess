import React, { useState } from 'react';
import "../style/ChessSquire.css"

// Chessboard square component
const Square = ({ black }) => {
  const fill = black ? 'black' : 'white';
  const textColor = black ? 'white' : 'black';
  return <div className="square" style={{ backgroundColor: fill, color: textColor }}></div>;
};

// Chessboard component
export const ChessSquire = ({ size }) => {
  const [boardSize, setBoardSize] = useState(size);
  
  const renderRow = (rowIndex) => {
    const row = [];
    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      const isBlack = (rowIndex + colIndex) % 2 === 1;
      row.push(<Square key={colIndex} black={isBlack} />);
    }
    return row;
  };

  const renderBoard = () => {
    const board = [];
    for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
      board.push(<div key={rowIndex} className="board-row">{renderRow(rowIndex)}</div>);
    }
    return board;
  };

  return (
    <div className="chessboard">
      <div className='btns'>
        <button onClick={() => setBoardSize(boardSize - 1)} disabled={boardSize <= 2}>Size <span>-</span> </button>
        <button onClick={() => setBoardSize(boardSize + 1)}> Size <span>+</span></button>
      </div>
      <p>Board Size :: {boardSize}*{boardSize}</p>
      {renderBoard()}
    </div>
  );
};

 

