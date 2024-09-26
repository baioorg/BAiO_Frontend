"use client"

import Header from "../../components/Header/Header";
import "./ValidationPage.css"
import Image from "next/image";
import Link from "next/link";



export default function EmailValidation() {
   
    return(
        <div>
            <Header/>
            <div className = "bracket"> 
                <div className = "val-page">                   
                    <div className="val-content">
                        <Image className="letterImg" src="/mail.svg" alt="Letter" height={100} width={100}/>
                        <h1> Verify your email address to complete create new BAiO user.</h1>

                        <h2>We have sent a verification link to the email you registered with.</h2>

                        <h2>Click on the link in the mail to complete the registration process.</h2>
                       
                        <h2>If you do not receive the email in a timely manner, 
                            please check your spam folder or resend verification email below.</h2>

                            <div className="val-btn-container">
                            <button className="val-btn" type="submit">Resend verification email</button>
                            <Link className ="val-btn-container" href="/">
                                <button className="val-btn">Create new user account</button>
                            </Link>
                            </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}