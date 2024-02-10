import React from "react";
import "./Footer.css";
import { Typography } from "antd";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <Typography style={{ color: "#ffffff", fontSize: 15, padding: 12 }}>
          Made by Hisano Sato
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
