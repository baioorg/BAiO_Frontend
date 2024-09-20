import { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [position, setPosition] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  function takeInUseInfo(
    firstName,
    lastName,
    email,
    country,
    affiliation,
    position,
    fieldOfStudy
  ) {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setCountry(country);
    setAffiliation(affiliation);
    setPosition(position);
    setFieldOfStudy(fieldOfStudy);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          country,
          affiliation,
          position,
          fieldOfStudy,
        }),
      });

      if (response.ok) {
        alert("User registration successful");
      } else {
        alert("Registration failed, please try again");
      }
    } catch (error) {
      alert("Error during registration");
    }
  }

  function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
      return true;
    } else {
      alert("Please enter valid email address");
      return false;
    }
  }

  function allFieldsFilled(event) {
    if (validateEmail(email)) {
      if (
        firstName.length > 1 &&
        lastName.length > 1 &&
        email.length > 1 &&
        country.length > 1 &&
        affiliation.length > 1 &&
        position.length > 1 &&
        fieldOfStudy.length > 1
      ) {
        return handleSubmit(event);
      } else {
        alert("Please fill all fields");
        return false;
      }
    }
  }

  return ( 
  <div className = "regContainer">
    <form onSubmit={allFieldsFilled} classname = "new-user-form">
        <div className = "form-row">
            <label htmlFor="firstName">First Name</label>
            <input
                value = {firstName}
                onChange = {firstName => setFirstName(firstName.target.value)}
                type = "text"
                id = "firstName" />
        </div>
        <div className = "form-row">
            <label htmlFor="lastName">Last Name</label>
            <input
                value = {lastName}
                onChange = {lastName => setLastName(lastName.target.value)}
                type = "text"
                id = "lastName" />
        </div>
        <div className = "form-row">
            <label htmlFor="email">Email</label>
            <input
                value = {email}
                onChange = {email => setEmail(email.target.value)}
                type = "text"
                id = "email" />
        </div>
        <div className = "form-row">
            <label htmlFor="country">Country</label>
            <input
                value = {country}
                onChange = {country => setCountry(country.target.value)}
                type = "text"
                id = "country" />
        </div>
        <div className = "form-row">
            <label htmlFor="affiliation">Affiliation</label>
            <input
                value = {affiliation}
                onChange = {affiliation => setAffiliation(affiliation.target.value)}
                type = "text"
                id = "affiliation" />
        </div>
        <div className = "form-row">
            <label htmlFor="position">Position</label>
            <input
                value = {position}
                onChange = {position => setPosition(position.target.value)}
                type = "text"
                id = "position" />
        </div>
        <div className = "form-row">
            <label htmlFor="fieldOfStudy">Field of study</label>
            <input
                value = {fieldOfStudy}
                onChange = {fieldOfStudy => setFieldOfStudy(fieldOfStudy.target.value)}
                type = "text"
                id = "fieldOfStudy" />
        </div>
    </form>

  </div>
  );
}
