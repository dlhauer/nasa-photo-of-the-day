import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img `
  border-radius: 0;
  width: 600px;
  height: auto;
`;

const ImgContainer = styled.div `
  padding: 20px;
  background-color: lightgray;
  border-radius: 20px;
  margin: 10px;
`;


function Photo(props) {
  return ( 
    <ImgContainer>
      <StyledImg src={props.src} alt={props.alt}/>;
    </ImgContainer>
  )
}

export default Photo;