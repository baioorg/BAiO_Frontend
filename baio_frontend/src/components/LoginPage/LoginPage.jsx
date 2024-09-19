//Adapted from https://github.com/KWaloen/My-Portolio-Website/blob/main/src/app/ReactProjects/LoginPage/page.tsxS

"use client";

import { useState } from "react";
import "./LoginPage.css";
import LogInForm from "./LoginForm";

export default function loginPage() {
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  function takeInCredentials(username, password) {
    setSubmittedUsername(username);
    setSubmittedPassword(password);
  }

  return (
    <div className="bracket">
      <div className="loginPage-page">
        <div className="content">
          <h1> Sign in to BAiO as an existing user</h1>
          <LogInForm onSubmit={takeInCredentials} />
          <hr className = "line"/>
        </div>
      </div>
    </div>
  );
}
