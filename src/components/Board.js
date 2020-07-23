import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("value here")} />
      <Square value="2" onClick={() => onClick("value here")} />
      <Square value="3" onClick={() => onClick("value here")} />
      <Square value="4" onClick={() => onClick("value here")} />
      <Square value="5" onClick={() => onClick("value here")} />
      <Square value="6" onClick={() => onClick("value here")} />
      <Square value="7" onClick={() => onClick("value here")} />
      <Square value="8" onClick={() => onClick("value here")} />
      <Square value="9" onClick={() => onClick("value here")} />
    </div>
  )
}

export default Board;