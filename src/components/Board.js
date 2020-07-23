import React from 'react';
import Square from './Square';

const style = {
  border: '5px solid #31393E',
  borderRadius: '10px',
  width: '255px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, index) => (
        <Square value={square} key={index} onClick={() => onClick(index)} />
      ))}
    </div>
  )
}

export default Board;