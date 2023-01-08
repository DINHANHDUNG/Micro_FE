import React from "react";

function Header(props) {
  return (
    <div class="header">
      <a href="default" class="logo">
        HOMEPAGE
      </a>
      <div class="header-right">
        <a class="active" href="">
          Home
        </a>
        <a href="contact">Contact</a>
        <a href="about">About</a>
      </div>
    </div>
  );
}

export default Header;


