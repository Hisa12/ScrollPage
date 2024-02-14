import React from "react";
import { LinkedinFilled, GithubOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./SNSIcons.css";

function SNSIcons() {
  return (
    <Space size="large" className="snsComp">
      <a
        href="https://www.linkedin.com/in/hisano-sato-501a42205"
        className="LinkedInLink"
      >
        <LinkedinFilled style={{ fontSize: "50px", color: "#808588" }} />
      </a>
      <a href="https://github.com/Hisa12">
        <GithubOutlined style={{ fontSize: "50px", color: "#808588" }} />
      </a>
    </Space>
  );
}

export default SNSIcons;
