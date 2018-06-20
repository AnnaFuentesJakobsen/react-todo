import React, { Component } from 'react';

function handleClick() {
  console.log('Clicked');
}

class Button extends Component {
  render() {  
    return (
      <div>
        <button onClick={handleClick}>
          Add todo
        </button>
      </div>
    );
  }
}

export default Button;