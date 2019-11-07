import React from 'react';

function Button(props) {
  return(
    <button onClick={() => props.function(parseInt(props.amount))}>
      {props.text}
    </button>
  )
}

export default Button;