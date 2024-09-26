"use client";

import React from "react";
import './ProfileDropdown.css';
import { FaUserCircle } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { FiMoon } from 'react-icons/fi';
import  { MdLogout } from "react-icons/md";




export default function ProfileDropDown({type = 'dropdown', openSettings, openProfileSettings}) {

    return (
        <div className="dropdown">
            <div className="dropdownTop">
                <button className="dropdownButton" onClick={openProfileSettings}><FaUserCircle size="1.3em"/>Profile</button>
                <button className="dropdownButton" onClick={openSettings}><CiSettings size="1.3em"/>Settings</button>
                <button className="dropdownButton"><FiMoon size="1.3em"/>Swith to Dark Mode</button>
            </div>
            <div className="dropdownBottom">
                <hr className="dropdownDivider"/>
                <button className="dropdownButton"><MdLogout size="1.3em"/>Sign Out</button>
            </div>
        </div>
    )
}