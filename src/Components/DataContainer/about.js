import React from 'react';
import { Row,Col } from 'antd';
import SkillDetails from './skillDetails';

const About = () => {
    const skills = [
        {
            key:0,
            title:"FrontEnd Web Devlopment",
            description:"I am enthusiastic for frontend web development.I use HTML,CSS,JS and React JS for creating beautiful websites",
        },
        {   
            key:1,
            title:"API Generation",
            description:"Love to create API and like to gain more experience in it. Have my LOVE towards REST API and graphql",
        }
    ]
    const values = [
        {
            key:0,
            title:"BackEnd Web Devlopment",
            description:"Love to work in Node Js,Express and Mongo DB.Have my interest in MySQL",
        },
        {
            key:1,
            title:"Free Lancer",
            description:"Love to work for individual clients.Also make subject related videos on You Tube.",
        }
    ]
    return (
        <div className="about-container">
            <p className="about-contents">
                <ul>
                    <li>Accomplished,energetic and competent undergraduate</li>
                    <li>I am dependable also efficient in time management.</li>
                    <li>I use creative
                    approach to solve problems.</li>
                    <li>I find myself imaginative and
                    enthusiastic to work as a web developer and feel confident to
                    fullfill the needs of the company as an employee.</li>
                    <li>Hello</li>
                    <li>World</li>
                </ul>
            </p>
            <div className="services">
                <p className="services-header">Services I Offer</p>
                <Row gutter={[20,20]} className="services-container">
                    <Col xs={24} sm={24} md={12} lg={12}>
                        {skills.map((key)=>{
                            return(
                                <SkillDetails title={key.title} description={key.description}/>
                            )
                        })}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        {values.map((key)=>{
                            return(
                                <SkillDetails title={key.title} description={key.description}/>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About
