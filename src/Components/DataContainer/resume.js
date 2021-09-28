import React from "react";
import { Row, Col } from "antd";
import { languages } from "./data";
import Bar from "./bar";
import { Progress } from "antd";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* <p className="resume-header">Resume</p> */}
      <Row className="" gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="experience-details-container">
            <p className="experience-heading">Experience</p>
            <div className="experience-container">
              <p className="experience-header">Front-end Developer</p>
              <p className="company-name">
                Mool Innovations Pvt Ltd (May-Sept 2021)
              </p>
              <ul className="experience-description">
                <li>
                  Designed Web pages,also made it responsive for various
                  devices.
                </li>
                <li>Integrated frontend to backend using API.</li>
                <li>
                  Used tech stacks like HTML, less, React JS for writing clean
                  code
                </li>
                <li>
                  Worked closely with developer team ,also integrated the code
                  using GitHub
                </li>
              </ul>
            </div>
          </div>
          <div className="skills-container">
            <p className="skills-container-heading">Tech-Stack Known</p>
            {languages.map((key) => {
              return (
                  <Bar name={key.name} level={key.level}/>
              );
            })}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p className="experience-heading">Education</p>
          <div className="experience-container">
            <p className="experience-header">
              College of Engineering and Technology,Bhubaneswar
            </p>
            <p className="company-name">
              B.Tech in Information Technology (2018-22)
            </p>
            <ul className="experience-description">
              <li> CGPA 9.0 -till date.</li>
              <li>
                {" "}
                Active member of Cetadel - Literary club of CET and E-cell -
                Entrepreneurship club of CET
              </li>
            </ul>
          </div>
          <div className="experience-container">
            <p className="experience-header">
              Fakir Mohan Junior College,Balasore
            </p>
            <p className="company-name">Intermediate Science</p>
            <ul className="experience-description">
              <li>Higher Secondary Education with 80.83%.</li>
            </ul>
          </div>
          <div className="experience-container">
            <p className="experience-header">
              St Anne's Convent School , Baripada
            </p>
            <ul className="experience-description">
              <li>Matriculation with 91.33%.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
