import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import ProfileDetails from "./Components/profileDetails";
import DataStorage from "./Components/dataStorage";

const App = () => {
  return (
    <div className="project-container">
      <Row gutter={[20,20]}>
        <Col xs={24} sm={24} md={6} lg={6}>
          <ProfileDetails />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18}>
          <DataStorage />
        </Col>
      </Row>
    </div>
  );
};

export default App;
