import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const StyledButton = styled.button`
    background-color: #2196f3;
    border: 1px solid #2196f3;
    color: white;
    height: 2rem;
    border-radius: 5px;
    font-size: 1.3rem;
    font-family: 'Helvetica Neue'

    &:hover {
      background-color: white;
      color: #2196f3;
    }

    ${props => props.type === 'crazy' ? `background-color: #00ffff; color: #ff00ff` : null}
  `

  return(
    <StyledButton onClick={() => props.function(parseInt(props.amount))}>
      {props.text}
    </StyledButton>
  )
}

export default Button;