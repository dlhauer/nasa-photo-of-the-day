import React from 'react';

function Date(props) {

  
  return ( <span>{props.date}</span> )
}

function parseDate(dateStr) {
  const newStr = dateStr.split('-').join('');
  return newStr;
}

export default Date;