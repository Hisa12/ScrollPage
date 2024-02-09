import React from "react";
import SNSIcons from "../Components/SNSIcons/SNSIcons";
import "../Styles/FirstPage.css";
import AboutMeButton from "../Components/AboutMeButton/AboutMeButton";
import { Row, Col, Typography, Flex } from "antd";

const { Title } = Typography;

function FirstPage() {
  return (
    <div className="container">
      <div className="padding">
        <Flex vertical>
          <Title
            level={4}
            style={{
              color: "#2CD4D9",
              letterSpacing: "5px",
            }}
          >
            Hello, World!
          </Title>
          <Title
            style={{
              color: "#FFFFFF",
              fontSize: "6vw",
              letterSpacing: "5px",
              marginTop: 0,
            }}
          >
            I'm Hisano Sato
          </Title>
          <div style={{ paddingTop: "40px" }}>
            <Title
              level={5}
              style={{
                color: "#FFFFFF",
                letterSpacing: "4px",
              }}
            >
              JavaScript | React | React Native | Node.js
            </Title>
          </div>

          <div style={{ paddingTop: "60px" }}>
            <SNSIcons />
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default FirstPage;
