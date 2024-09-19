import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button'

export default function Header({type = 'header'}) {
    function openProfileMenu(){
        
    }
    
    return (
        <div className = "navbar">
            <div className = "navbarLeft">
                <Link to="/MainPage"><h1>BAiO</h1> New Chat</Link>
            </div>

            <div className = "navbarRight">
                <Link to={{pathname: "https://github.com/baioorg/"}} target="_blank">Github</Link>
                <Link to="/About">About</Link>
                <Link to="Contact">Contact</Link>      
                <Button onclick={openProfileMenu}></Button>
            </div>
        </div>

    )
}