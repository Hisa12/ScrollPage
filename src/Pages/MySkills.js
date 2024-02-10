import React from "react";
import "../Styles/MySkills.css";
import SkillList from "../Components/SkillList/SkillList";
import Title from "antd/es/typography/Title";
import { Row, Col } from "antd";

function MySkills() {
  return (
    <div className="mySkillsContainer">
      <div style={{ paddingTop: "80px" }}>
        <Title style={{ color: "#ffffff", letterSpacing: "5px" }} id="MySkills">
          My Skills
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
          My enthusiasm for new technologies fuels my constant pursuit of
          innovation!
        </p>
      </Col>

      <div>
        <Row justify="space-evenly">
          <SkillList />
        </Row>
      </div>
    </div>
  );
}

export default MySkills;
