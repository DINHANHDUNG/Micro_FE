import React from "react";

function Header(props) {
  const clickHeader = (value) =>{
    console.log("asdasdasd",value);
    console.log('props', props);
    props?.CallBack(value)
  }
  return (
    <div className="header">
      <a className="logo" onClick={()=>clickHeader('')}>
        HOMEPAGE
      </a>
      <div className="header-right">
        <a className="active" onClick={()=>clickHeader('')}>
          Home
        </a>
        <a onClick={()=>clickHeader('contact')}>Contact</a>
        <a onClick={()=>clickHeader('about')}>About</a>
      </div>
    </div>
  );
}

export default Header;


