import React from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

function AboutMeButton() {
  return (
    <>
      <Space>
        <Button
          style={{
            color: "white",
            fontSize: "17px",
            borderColor: "#3bcbab",
            backgroundColor: "#3bcbab",
          }}
          href="mailto:info.hisa321@gmail.com"
          type="primary"
          size="large"
        >
          More About Me
        </Button>
      </Space>
    </>
  );
}

export default AboutMeButton;
