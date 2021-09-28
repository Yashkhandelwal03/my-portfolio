import React from "react";
import About from "./DataContainer/about";
import Projects from "./DataContainer/projects";
import Resume from "./DataContainer/resume";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const DataStorage = () => {
  return (
    <div className="dataStorage-container">
      <Tabs defaultActiveKey="1" className="tabs-container">
        <TabPane tab="About" key="1">
            <About />
        </TabPane>
        <TabPane tab="Resume" key="2">
            <Resume />
        </TabPane>
        <TabPane tab="Projects" key="3">
            <Projects />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DataStorage;
