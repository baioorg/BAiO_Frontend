"use client";

import React, {useState, useRef} from "react";
import './Header.css'; 
import Link from "next/link";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import {FaGithub, FaUserCircle} from 'react-icons/fa';
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import ProfileSettingsMenu from "../ProfileSettingsMenu/ProfileSettingsMenu";


export default function Header({type = 'header'}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);
    
    function toggleDropdown(){
        setIsDropdownOpen(prevstate => !prevstate);
        setIsSettingsOpen(false);
        setIsProfileSettingsOpen(false);
    }

    function openSettings(){
        setIsSettingsOpen(true);
        setIsDropdownOpen(false);
        setIsProfileSettingsOpen(false);
    }

    function closeSettings(){
        setIsSettingsOpen(false);
        setIsDropdownOpen(false);
        setIsProfileSettingsOpen(false);
    }

    function openProfileSettings(){
        setIsProfileSettingsOpen(true);
        setIsSettingsOpen(false);
        setIsDropdownOpen(false);
    }

    function closeProfileSettings(){
        setIsProfileSettingsOpen(false);
        setIsSettingsOpen(false);
        setIsDropdownOpen(false);
    }
    
    return (
        <div>
            <header className = "navbar">
                <div className = "navbarLeft">
                    <Link href="/" className="navbarLink"><h1>BAiO</h1></Link>
                    <Link href="/Main" className="navbarLink">New Chat</Link>
                </div>

                <div className = "navbarRight">
                    <Link href="https://github.com/baioorg/" target="_blank" className="navbarLink"><FaGithub color="#ffffff" size="1.5em"/>Github</Link>
                    <Link href="/About" className="navbarLink">About</Link>
                    <Link href="/Team" className="navbarLink">Contact</Link>      
                    <button onClick={toggleDropdown} className="profileButton" aria-label="Profile Menu">
                        <FaUserCircle color="#ffffff" size="3em"/>
                    </button>
                </div>

            </header>
            {isDropdownOpen && <ProfileDropdown openSettings={openSettings} openProfileSettings={openProfileSettings}/>}
            {isSettingsOpen && <SettingsMenu closeSettings={closeSettings}/>}
            {isProfileSettingsOpen && <ProfileSettingsMenu closeProfileSettings={closeProfileSettings}/>}
        </div>

    )
}