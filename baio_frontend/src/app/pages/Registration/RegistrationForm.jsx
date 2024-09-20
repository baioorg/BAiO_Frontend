//https://www.npmjs.com/package/react-select-country-list

import { useState, useMemo } from "react";
import "./RegistrationForm.css";
import { useRouter } from "next/navigation";

import Select from "react-select";
import countryList from "react-select-country-list";

export default function RegistrationForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [position, setPosition] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  const router = useRouter();

  const countryOptions = useMemo(() => countryList().getData(), []);

  const changeHandler = (country) => {
    setCountry(country);
  };

  async function handleSubmit(event) {
    try {
      router.push("/pages/EmailValidation");
    } catch (error) {
      alert("Error during registration");
    }
  }

  function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
      return true;
    } else {
      return false;
    }
  }

  function checkAllFieldsAreNotEmpty() {
    if (
      firstName.length > 1 &&
      lastName.length > 1 &&
      email.length > 1 &&
      country.length > 1 &&
      affiliation.length > 1 &&
      position.length > 1 &&
      fieldOfStudy.length > 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Main form submission handler
  function allFieldsFilled(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if all fields are filled
    if (!checkAllFieldsAreNotEmpty()) {
      alert("Please fill all fields.");
      return false;
    }

    // Validate email
    if (!validateEmail(email)) {
      alert(
        "Please enter a valid email address in the format of email@domain.com."
      );
      return false;
    }

    // Proceed with form submission
    handleSubmit();
  }

  return (
    <div className="regContainer">
      <form onSubmit={allFieldsFilled} classname="new-user-form">
        <div className="reg-form-row">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(firstName) => setFirstName(firstName.target.value)}
            type="text"
            id="firstName"
          />
        </div>
        <div className="reg-form-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            onChange={(lastName) => setLastName(lastName.target.value)}
            type="text"
            id="lastName"
          />
        </div>
        <div className="reg-form-row">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(email) => setEmail(email.target.value)}
            type="text"
            id="email"
          />
        </div>
        <div className = "reg-dropdown">
          <label htmlFor="country">Country</label>
          <Select
            options={countryOptions}
            value={country}
            onChange={changeHandler}
          />
        </div>
        <div className="reg-form-row">
          <label htmlFor="affiliation">Affiliation</label>
          <input
            value={affiliation}
            onChange={(affiliation) => setAffiliation(affiliation.target.value)}
            type="text"
            id="affiliation"
          />
        </div>
        <div className="reg-form-row">
          <label htmlFor="position">Position</label>
          <input
            value={position}
            onChange={(position) => setPosition(position.target.value)}
            type="text"
            id="position"
          />
        </div>
        <div className="reg-form-row">
          <label htmlFor="fieldOfStudy">Field of study</label>
          <input
            value={fieldOfStudy}
            onChange={(fieldOfStudy) =>
              setFieldOfStudy(fieldOfStudy.target.value)
            }
            type="text"
            id="fieldOfStudy"
          />
        </div>
        <button className="reg-btn" type="submit">
          Create new BAiO user account
        </button>
      </form>
    </div>
  );
}
