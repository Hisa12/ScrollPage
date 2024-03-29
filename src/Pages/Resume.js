import React from "react";
import "../Styles/Resume.css";
import { Typography, Timeline } from "antd";

const { Title } = Typography;
function Resume() {
  return (
    <div className="resumeContainer">
      <Title style={{ color: "#ffffff", letterSpacing: "5px" }} id="Resume">
        Resume
      </Title>
      <div>
        <Title level={2} style={{ color: "#2CD4D9" }}>
          Work Experience
        </Title>
        <div className="subContainer">
          <div className="workTimeContainer">
            <Timeline
              mode="left"
              items={[
                {
                  label: (
                    <div style={{ paddingRight: 40 }}>
                      <Title level={3} style={{ color: "#ffffff" }}>
                        Kanavoogle Pty Ltd
                      </Title>
                      <p
                        style={{
                          color: "#808588",
                          textAlign: "right",

                          fontSize: "18px",
                        }}
                      >
                        February 2023 – July 2023
                      </p>
                    </div>
                  ),
                  children: (
                    <div style={{ paddingLeft: 20 }}>
                      <Title level={3} style={{ color: "#ffffff" }}>
                        Full-Stack Development
                      </Title>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#808588",
                          textAlign: "left",

                          fontSize: "18px",
                        }}
                      >
                        Intern
                      </p>
                      <p
                        style={{
                          color: "#808588",
                          textAlign: "left",
                          lineHeight: "1.9",
                          fontSize: "18px",
                        }}
                      >
                        Developed user-friendly login and signup pages using
                        JavaScript, React, and VITE, and established backend
                        functionality including credentials and error handling
                        using Node.js for a softskill measurement platform.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div>
        <Title level={2} style={{ color: "#2CD4D9" }}>
          Education
        </Title>
        <div className="subContainer">
          <div className="workTimeContainer">
            <Timeline
              mode="left"
              items={[
                {
                  label: (
                    <div style={{ paddingRight: 40 }}>
                      <Title level={3} style={{ color: "#ffffff" }}>
                        Master's Degree in CS
                      </Title>
                      <p
                        style={{
                          color: "#808588",
                          textAlign: "right",
                          fontSize: "18px",
                        }}
                      >
                        2022 – 2023
                      </p>
                    </div>
                  ),
                  children: (
                    <div style={{ paddingLeft: 20 }}>
                      <Title level={3} style={{ color: "#ffffff" }}>
                        Queensland University of Technology
                      </Title>
                      <p
                        style={{
                          color: "#ffffff",
                          textAlign: "left",
                          fontSize: "18px",
                        }}
                      >
                        Final GPA 5.9 / 7
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
