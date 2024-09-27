//Adapted from https://github.com/KWaloen/My-Portolio-Website/blob/main/src/app/ReactProjects/LoginPage/page.tsxS

"use client";

import "./LoginPage.css";
import LogInForm from "./LoginForm";
import Link from "next/link";

export default function loginPage() {
 
  return (
    <div className="bracket">
      <div className="loginPage-page">
        <div className="logincontent">
          <h1> Sign in to BAiO as an existing user</h1>
            <LogInForm/>
            <hr className = "line"/>
            <h1> Register as a new BAiO user</h1>
            
              <Link className ="btn" href="/Registration">
                <button>Create new user account</button>
              </Link>
            
        </div>
      </div>
    </div>
  );
}
