import React, { useState } from "react";
import "../Styles/Project.css";
import comingSoon from "../../src/assets/comingSoon.png";
import weather from "../../src/assets/weather.png";
import weatherScreen from "../../src/assets/weatherScreen.png";
import { Row, Typography, Col, Button, Modal } from "antd";

const { Title } = Typography;

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="projectContainer">
      <div style={{ paddingTop: "80px" }}>
        <Title style={{ color: "#ffffff", letterSpacing: "5px" }} id="Project">
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
          <div className="projectItem">
            <img className="projectImage" src={weather} alt="weather-project" />
            <div class="middle">
              <Title
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                  lineHeight: "1.9",
                  fontSize: "18px",
                }}
                level={3}
              >
                Weather Forecast
              </Title>
              <p className="text">
                It is a platform which allows you to check weather forecast in
                your place!
              </p>

              <Button
                onClick={showModal}
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  borderColor: "#3bcbab",
                  backgroundColor: "#3bcbab",
                }}
                backgroundColor="#2CD4D9"
                size="large"
              >
                Read more
              </Button>
              <Modal
                title="Weather Forecast"
                footer={null}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
              >
                <img
                  className="projectScreen"
                  src={weatherScreen}
                  alt="weather-project"
                />
                <div>
                  <p>description</p>
                </div>
                <div>
                  <Button
                    style={{
                      color: "#ffffff",
                      fontSize: "17px",
                      borderColor: "#3bcbab",
                      backgroundColor: "#3bcbab",
                    }}
                    href="https://check-weather123.netlify.app/"
                    backgroundColor="#2CD4D9"
                    size="large"
                  >
                    Visit site
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
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
