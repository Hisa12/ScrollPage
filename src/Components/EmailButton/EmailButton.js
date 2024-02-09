import React from "react";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

function EmailButton() {
  return (
    <Button
      style={{
        color: "#ffffff",
        fontSize: "17px",
        borderColor: "#3bcbab",
        backgroundColor: "#3bcbab",
      }}
      href="mailto:info.hisa321@gmail.com"
      backgroundColor="#2CD4D9"
      size="large"
      icon={<MailOutlined />}
    >
      Send a message
    </Button>
  );
}

export default EmailButton;
