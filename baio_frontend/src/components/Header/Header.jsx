"use client";

import React, {useState, useRef} from "react";
import './Header.css'; 
import Link from "next/link";
import Button from '../Button/Button'
import Image from "next/image";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import {FaGithub, FaUserCircle} from 'react-icons/fa';


export default function Header({type = 'header'}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    function toggleDropdown(){
        setIsDropdownOpen(prevstate => !prevstate);
    }
    
    return (
        <div>
            <header className = "navbar">
                <div className = "navbarLeft">
                    <Link href="/" className="navbarLink"><h1>BAiO</h1></Link>
                    <Link href="/" className="navbarLink">New Chat</Link>
                </div>

                <div className = "navbarRight">
                    <Link href="https://github.com/baioorg/" target="_blank" className="navbarLink"><FaGithub color="#ffffff" size="1.5em"/>Github</Link>
                    <Link href="/pages/About" className="navbarLink">About</Link>
                    <Link href="/pages/Team" className="navbarLink">Contact</Link>      
                    <Button onClick={toggleDropdown} classname="profileButton" aria-label="Profile Menu">
                        <FaUserCircle color="#ffffff" size="3em"/>
                    </Button>
                </div>

            </header>
            {isDropdownOpen && <div ref={dropdownRef}><ProfileDropdown /></div>}
        </div>

    )
}