import Header from "@/components/Header/Header";
import React from "react";
import "./page.css";

export default function Team() {
  return (
    <div className="team-page body">
      <Header />
      <div className="content">
        <h2>The BAiO Team</h2>

        <div className="section">
          <h3>Administration</h3>
          <ProfileCard
            name="Stian Bekkeheien"
            role="Developer"
            image="/images/stian_profile_pic.jpg"
          />
          <ProfileCard
            name="Kai Waloen"
            role="Developer"
            image="/images/kai_profile_pic.jpg"
          />
          <ProfileCard
            name="Trym Kvitnes"
            role="Developer"
            image="/images/trym_profile_pic.jpg"
          />
        </div>
        <div className="section">
          <h3>Development</h3>
          <ProfileCard
            name="Stian Bekkeheien"
            role="Developer"
            image="/images/stian_profile_pic.jpg"
          />
          <ProfileCard
            name="Kai Waloen"
            role="Developer"
            image="/images/kai_profile_pic.jpg"
          />
          <ProfileCard
            name="Trym Kvitnes"
            role="Developer"
            image="/images/trym_profile_pic.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ name, role, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h4>{name}</h4>
      <p className="role">{role}</p>
    </div>
  );
}
