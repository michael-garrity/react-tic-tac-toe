import React from 'react';

const style = {
  background: '#07122b',
  color: '#fff',
  border: '1px solid #282F33',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
  margin: '0'

}

const Square = ({ onClick, value }) => {
  return (
    <button style={style} onClick={onClick}>{value}</button>
  )
}

export default Square;