import React from "react";
import "../Styles/Contact.css";
import { Col, Typography, Flex } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import EmailButton from "../Components/EmailButton/EmailButton";

const { Title } = Typography;
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
