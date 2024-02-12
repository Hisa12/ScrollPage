import React from "react";
import "../Styles/AboutMe.css";
import { Row, Col, Typography } from "antd";
import selfPhoto from "../assets/selfPhoto.png";
const { Title } = Typography;

function AboutMe() {
  return (
    <div className="aboutmeContainer">
      <div style={{ paddingTop: "80px" }}>
        <Title style={{ color: "#ffffff", letterSpacing: "5px" }} id="AboutMe">
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
                className="description"
                // style={{
                //   textAlign: "left",
                //   color: "gray",
                //   lineHeight: "1.9",
                //   fontSize: "18px",
                // }}
              >
                When I was a kid, curiosity sparked my fascination with
                technology, setting the stage for a lifelong journey into the
                dynamic realm of IT. Now, as a recent graduate armed with both
                knowledge and enthusiasm, I blend technical prowess with a sense
                of humor. My passion for learning new skills fuels an
                adventurous approach to projects, making me well-equipped and
                eager to tackle challenges in this ever-evolving landscape.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
