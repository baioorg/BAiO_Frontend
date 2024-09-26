"use client";

import React from "react";

import { IoClose } from "react-icons/io5"
import { FaUserCircle } from 'react-icons/fa';
import "./ProfileSettingsMenu.css";


export default function ProfileSettingsMenu({type = 'profileSettings', closeProfileSettings}) {
    return (
        <div className="profileSettings">
            <div className="menuHeader">
                <h1>Profile</h1>
                <button onClick={closeProfileSettings}><IoClose size={"1.7em"}/></button>  
            </div>
            <hr></hr>

            <div className="profileMenu">
                <div className="buttonSection">
                    <FaUserCircle size={"8em"}/>
                    <button className="editButton">Upload Image</button>
                    <button className="editButton">Edit Profile</button>
                    <button className="editButton">Change Password</button>
                    <button id="deleteButton">Delete Profile</button>
                </div>
                <div className="informationSection">
                    <div className="info-item">
                        <strong>First Name:</strong> <span>John</span>
                    </div>
                    <div className="info-item">
                        <strong>Last Name:</strong> <span>Doe</span>
                    </div>
                    <div className="info-item">
                        <strong>Email:</strong> <span>john.doe@example.com</span>
                    </div>
                    <div className="info-item">
                        <strong>Country:</strong> <span>USA</span>
                    </div>
                    <div className="info-item">
                        <strong>Affiliation:</strong> <span>OpenAI</span>
                    </div>
                    <div className="info-item">
                        <strong>Position:</strong> <span>Developer</span>
                    </div>
                    <div className="info-item">
                        <strong>Field of Study:</strong> <span>Computer Science</span>
                    </div>
                    <div className="info-item">
                        <strong>Registration Date:</strong> <span>2023-01-15</span>
                    </div>
                </div>
            </div>
        
        </div>
    );

}