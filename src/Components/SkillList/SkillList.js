import React from "react";
import { Row, Col, Typography, Progress } from "antd";

const Title = Typography;
const SkillData = [
  { skill: "HTML & CSS", percentage: 90 },
  { skill: "JavaScript", percentage: 90 },
  { skill: "React JS", percentage: 90 },
  { skill: "React Native", percentage: 80 },
  { skill: "Node JS", percentage: 70 },
  { skill: "C#", percentage: 70 },
  { skill: "AWS", percentage: 50 },
  { skill: "MongoDB", percentage: 40 },
];
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
              size={[380, 15]}
            />
          </Row>
        </Col>
      ))}
    </>
  );
}

export default SkillList;
