import React, { useState } from "react";
import styled from 'styled-components';
function Header(props) {
  const [show, setShow] = useState(true)
  const clickHeader = (value) =>{
    console.log("asdasdasd",value);
    console.log('props', props);
    props?.CallBack(value)
  }
  const actionShow = () => {
    if (window.innerWidth < 1000) {
      setShow(!show)
    }
    
  }
  //Không ảnh hưởng khi style trong CssGlobal
  const Header = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    background-color: revert;
  `;
  return (
    <Header className="header">
      <a className="logo" onClick={()=>{
        clickHeader('')
        actionShow()
      }}>
        HOMEPAGE
      </a>
      {show && <div className="header-right">
        <a className="active" onClick={()=>clickHeader('')}>
          Home
        </a>
        <a onClick={()=>clickHeader('contact')}>Contact</a>
        <a onClick={()=>clickHeader('about')}>About</a>
        <a onClick={()=>clickHeader('test')}>Test</a>
      </div>}
    </Header>
  );
}

export default Header;


