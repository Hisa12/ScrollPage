import React from "react";
import { Tag, Space, Card, Row, Col, Typography, Progress } from "antd";
import SkillData from "./Skills/SkillData";
const Title = Typography;

function SkillList() {
  return (
    <>
      {SkillData.map((item) => (
        <Col sm={20} md={14} xl={10}>
          <Row>
            <Title
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              {item.skill}
            </Title>
          </Row>
          <Row>
            <Progress
              percent={item.percentage}
              strokeColor="#2CD4D9"
              trailColor="#212122"
              strokeLinecap="butt"
              showInfo={false}
              size={[420, 15]}
            />
          </Row>
        </Col>
      ))}
    </>
  );
}

export default SkillList;
