import React from "react";
import Button from '../Button/Button';
import Image from "next/image";
import './ProfileDropdown.css';

export default function ProfileDropDown({type = 'dropdown'}) {
    return (
        <div className="dropdown">
            <button className="dropdownButton">Profile</button>
            <button className="dropdownButton">Settings</button>
            <button className="dropdownButton">Swith to Dark Mode</button>

            <button className="dropdownButton">Sign Out</button>
        </div>
    )
}