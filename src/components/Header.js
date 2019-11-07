import React from 'react';

function Header(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.owner}</h3>
      <h3>{props.date}</h3>
    </div>
  )
}

export default Header;