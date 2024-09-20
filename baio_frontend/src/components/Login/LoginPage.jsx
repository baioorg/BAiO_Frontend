//Adapted from https://github.com/KWaloen/My-Portolio-Website/blob/main/src/app/ReactProjects/LoginPage/page.tsxS

"use client";

import { useState } from "react";
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
            <button className="btn">
              <Link href="/pages/Registration">Create new user account</Link>
            </button>
        </div>
      </div>
    </div>
  );
}
