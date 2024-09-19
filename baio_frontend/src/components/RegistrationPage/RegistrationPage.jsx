//Adapted from https://github.com/KWaloen/My-Portolio-Website/blob/main/src/app/ReactProjects/LoginPage/page.tsxS

"use client";

import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import "./registrationPage.css";

export default function loginPage() {
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  function takeInCredentials(username, password) {
    setSubmittedUsername(username);
    setSubmittedPassword(password);
  }

  return (
    <div className="bracket">
      <div className="registration-page content">
        <h1> Sign in to BAiO as an existing user</h1>
        <RegistrationForm onSubmit={takeInCredentials} />
      </div>
    </div>
  );
}
