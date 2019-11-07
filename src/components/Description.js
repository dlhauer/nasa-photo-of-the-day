import React from 'react';
import styled from 'styled-components';

const TextBlock = styled.p`
  max-width: 550px;
  text-align: justify;
  margin-top: 1rem;
`;

function Description(props) {
  return <TextBlock>{props.content}</TextBlock>
}

export default Description;