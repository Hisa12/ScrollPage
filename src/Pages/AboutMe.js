import React from "react";
import "../Styles/AboutMe.css";
import { Row, Col, Typography } from "antd";
import selfPhoto from "../assets/selfPhoto.png";
const { Title } = Typography;

function AboutMe() {
  return (
    <div className="aboutmeContainer">
      <div style={{ paddingTop: "80px" }}>
        <Title style={{ color: "#ffffff", letterSpacing: "5px" }}>
          About Me
        </Title>
      </div>
      <div className="mainContainer">
        <Row justify="space-evenly">
          <Col xs={22} sm={18} md={12} xl={10}>
            <div>
              <img
                src={selfPhoto}
                alt="selfPhoto"
                style={{ width: "100%", maxWidth: "300px" }}
              />
            </div>
          </Col>
          <Col xs={22} sm={18} md={12} xl={10}>
            <div>
              <p
                style={{
                  textAlign: "left",
                  color: "gray",
                  lineHeight: "1.9",
                  fontSize: "18px",
                }}
              >
                accidentally discovered inspect element while I watching my
                favorite show online. That was the Voila moment for me. The tags
                and syntaxes fascinated me so I decided to be friends with them
                and become a programmer. After countless bugs, coding tutorials,
                and several cups of coffee, I am now a full-stack developer. I
                code projects during the day and learn new programming languages
                during the night. Basically, I live in the coding terminal 24/7.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
