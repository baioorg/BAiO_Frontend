"use client";

import React, {useState, useRef} from "react";
import './Header.css'; 
import Link from "next/link";
import Button from '../Button/Button'
import Image from "next/image";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";


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
                    <Link href="https://github.com/baioorg/" target="_blank" className="navbarLink">Github</Link>
                    <Link href="/pages/About" className="navbarLink">About</Link>
                    <Link href="/" className="navbarLink">Contact</Link>      
                    <Button onClick={toggleDropdown}><Image src="/profile-icon.png" alt="Profile Icon" width = {25} height= {25}/> </Button>
                </div>

            </header>
            {isDropdownOpen && <div ref={dropdownRef}><ProfileDropdown /></div>}
        </div>

    )
}