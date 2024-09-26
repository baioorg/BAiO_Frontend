"use client"

import Header from "../../../components/Header/Header";
import "./RegistrationPage.css"
import RegistrationForm from "./RegistrationForm";

export default function Registration() {
    return(
        <div>
            <Header/>
            <div className = "reg-bracket"> 
                <div className = "reg-page">                   
                    <div className="reg-content">
                        <h1> Create new BAiO user account </h1>
                        <RegistrationForm/>
                    </div>
                </div>    
            </div>
        </div>
    );
}