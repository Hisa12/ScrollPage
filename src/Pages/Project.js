import React from "react";
import "../Styles/Project.css";
import comingSoon from "../../src/assets/comingSoon.png";

import { Row, Typography, Col } from "antd";

const { Title } = Typography;

function Project() {
  return (
    <div className="projectContainer">
      <div style={{ paddingTop: "80px" }}>
        <Title style={{ color: "#ffffff", letterSpacing: "5px" }}>
          Project
        </Title>
      </div>
      <Col>
        <p
          style={{
            textAlign: "center",
            color: "gray",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          My eagerness to acquire new technologies is unstoppable!{" "}
        </p>
      </Col>
      <Row justify={"center"}>
        <Col xs={22} sm={18} md={12} xl={8}>
          <img className="projectImage" src={comingSoon} alt="Sample" />
        </Col>
        <Col xs={22} sm={18} md={12} xl={8}>
          <img className="projectImage" src={comingSoon} alt="Sample" />
        </Col>
        <Col xs={22} sm={18} md={12} xl={8}>
          <img className="projectImage" src={comingSoon} alt="Sample" />
        </Col>
      </Row>
    </div>
  );
}

export default Project;
