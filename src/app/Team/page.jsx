"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import { IoMdArrowBack } from "react-icons/io"; 
import "./page.css";

export default function Team() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const profiles = [
    {
      name: "Noah Bruderer",
      role: "Administrator",
      image: "/images/person_icon.png",
      education: "Biologi?",
      funFact: "A fun fact about me.",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    },
    {
      name: "Stian Bekkeheien",
      role: "Developer",
      image: "/images/stian_profile_pic.jpg",
      education: "Data Science",
      funFact: "A fun fact about me.",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    },
    {
      name: "Kai Waloen",
      role: "Developer",
      image: "/images/kai_profile_pic.png",
      education: "Data Technology",
      funFact: "A fun fact about me.",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    },
    {
      name: "Trym Kvitnes",
      role: "Developer",
      image: "/images/person_icon.png",
      education: "Data Science",
      funFact: "A fun fact about me.",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    }
  ];

  return (
    <div className="team-page body">
      <Header />

      <div className="team-content">
        {/* If a profile is selected, show the profile details */}
        {selectedProfile ? (
          <ProfileScreen profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
        ) : (
          <>
            <h2>The BAiO Team</h2>

            <h3>Administration</h3>
            <div className="section">
              <ProfileCard
                name="Noah Bruderer"
                role="Administrator"
                image="/images/person_icon.png"
                onClick={() => handleProfileClick(profiles[0])}
              />
            </div>

            <h3>Development</h3>
            <div className="section">
              {profiles.slice(1).map((profile, index) => (
                <ProfileCard
                  key={index}
                  name={profile.name}
                  role={profile.role}
                  image={profile.image}
                  onClick={() => handleProfileClick(profile)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ProfileCard component with onClick functionality
function ProfileCard({ name, role, image, onClick }) {
  return (
    <div className="profile-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={name} className="profile-image" />
      <h4>{name}</h4>
      <p className="role">{role}</p>
    </div>
  );
}

// ProfileScreen component to display detailed profile
function ProfileScreen({ profile, onClose }) {
  return (
    <div className="profile-screen-details">
      <button onClick={onClose} className="back-button">
        <IoMdArrowBack size={24} />
      </button>
      <div className="profile-details-container">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img
            src={profile.image || '/images/person_icon.png'}
            alt={profile.name}
            className="profile-image-large"
          />
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p><strong>Role:</strong> {profile.role}</p>
          <p><strong>Education:</strong> {profile.education}</p>
          <p><strong>Fun fact:</strong> {profile.funFact}</p>
        </div>
      </div>

      {/* About section */}
      <div className="profile-about">
        <h3>About {profile.name.split(" ")[0]}:</h3>
        <p>
          {profile.about}
        </p>
      </div>
    </div>
  );
}
