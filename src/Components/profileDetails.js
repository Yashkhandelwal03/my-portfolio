import React from 'react';
import profileImg from "../images/profileImg.jpeg";
import "../styles/profileDetails.css";
import {PushpinOutlined} from '@ant-design/icons';

const ProfileDetails = () => {
    return (
        <div className="profile-details-container">
            <div className="img-and-name-container">
                <img className="img-holder" src={profileImg} alt="Img not found"/>
                <div className="name-container">
                    <p className="first-name-container">Gopal</p>
                    <p className="last-name-container">Khandelwal</p>
                </div>
            </div>
            <div className="details-container">
                <p className="details-data-container"><PushpinOutlined />Full-Stack Developer</p>
                <p className="details-data-container"><PushpinOutlined />Mail id: gopalkhandelwal1997@gmail.com</p>
                <p className="details-data-container"><PushpinOutlined />location: Bhubaneswar,India</p>
                <p className="details-data-container"><PushpinOutlined />phone no: 8457036447</p>
            </div>
        </div>
    )
}

export default ProfileDetails
