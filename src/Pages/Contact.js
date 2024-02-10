import React from "react";
import "../Styles/Contact.css";
import { Row, Col, Typography, Flex } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import EmailButton from "../Components/EmailButton/EmailButton";
import background2 from "../assets/background2.png";

const { Title, Text } = Typography;
function Contact() {
  return (
    <div class="contactImg">
      <div className="padding">
        <Flex vertical>
          <div>
            <Title
              style={{ color: "#ffffff", letterSpacing: "5px" }}
              id="Contact"
            >
              Contact Me
            </Title>
          </div>
          <Col>
            <p
              style={{
                textAlign: "center",
                color: "#ffffff",
                lineHeight: "1.9",
                fontSize: "18px",
              }}
            >
              Feel free to reach out and let's collaborate on turning ideas into
              impactful realities!{" "}
            </p>
            <Title
              style={{
                textAlign: "center",
                color: "#ffffff",
                lineHeight: "1.9",
                fontSize: "18px",
              }}
            >
              <EnvironmentOutlined style={{ fontSize: 18 }} /> Australia
            </Title>
          </Col>
        </Flex>
        <EmailButton />
      </div>
    </div>
  );
}

export default Contact;
