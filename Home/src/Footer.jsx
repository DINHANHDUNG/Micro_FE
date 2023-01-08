import React from "react";

function Footer(props) {
  return (
    <div
      class="footer"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "red",
        textAlign: "center",
      }}
    >
      <p>Footer</p>
    </div>
  );
}

export default Footer;
