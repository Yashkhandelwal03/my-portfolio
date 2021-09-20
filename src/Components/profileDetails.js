import React from "react";
import profileImg from "../images/profileImg.jpeg";
import "../styles/profileDetails.css";
import {
  SketchOutlined,
  MailOutlined,
  EnvironmentOutlined,
  MobileOutlined,
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,FacebookOutlined
} from "@ant-design/icons";

const ProfileDetails = () => {
  const handleEmailMe = () => {
    window.open("mailto:gopalkhandelwal@gmail.com")
  }
  return (
    <div className="profile-details-container">
      <div className="img-and-name-container">
        <img className="img-holder" src={profileImg} alt="Img not found" />
        <div className="name-container">
          <p className="first-name-container">Gopal</p>
          <p className="last-name-container">Khandelwal</p>
        </div>
      </div>
      <div className="detail-container">
        <div className="details-container">
          <p className="details-data-container">
            <SketchOutlined /> Full-Stack Developer
          </p>
        </div>
        <div className="details-container">
          <p className="details-data-container">
            <MailOutlined /> gopalkhandelwal1997@gmail.com
          </p>
        </div>
        <div className="details-container">
          <p className="details-data-container">
            <EnvironmentOutlined /> Bhubaneswar,India
          </p>
        </div>
        <div className="details-container">
          <p className="details-data-container">
            <MobileOutlined /> 8457036447
          </p>
        </div>
      </div>
      <div className="icons-container">
        <h1 className="icons" ><a style={{color:"#3f87a6"}} href="https://www.facebook.com/yash.khandelwal.3363"><FacebookOutlined /></a></h1>
        <h1 className="icons"><a  style={{color:"#3f87a6"}} href=""><TwitterOutlined /></a></h1>
        <h1 className="icons"><a style={{color:"#3f87a6"}} className="icons" href="https://github.com/Yashkhandelwal03"><GithubOutlined /></a></h1>
        <h1 className="icons"><a style={{color:"#3f87a6"}} className="icons" href="https://www.linkedin.com/in/gopal-khandelwal-a168871a1/"><LinkedinOutlined /></a></h1>
      </div>
      <div className="button-container" onClick={handleEmailMe}>
        <p className="button-contents">Mail me</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
