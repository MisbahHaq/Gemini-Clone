import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-page">
      <div className="settings-top-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Settings</h1>
      </div>

      <div className="settings-container">
        <section className="settings-section">
          <h2>About</h2>
          <p className="section-description">
            Learn more about Gemini and how it works.
          </p>
          <div className="settings-options">
            <div className="option-card">
              <h3>Gemini Overview</h3>
              <p>Understand what Gemini can do and how it assists you.</p>
            </div>
            <div className="option-card">
              <h3>Privacy & Safety</h3>
              <p>How your data is protected and used.</p>
            </div>
            <div className="option-card">
              <h3>Terms of Service</h3>
              <p>Read our terms and conditions.</p>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>Your Activity</h2>
          <p className="section-description">
            Manage your history and recent interactions.
          </p>
          <div className="settings-options">
            <div className="option-card">
              <h3>Recent Activity</h3>
              <p>View and manage your recent conversations.</p>
            </div>
            <div className="option-card">
              <h3>Download Your Data</h3>
              <p>Get a copy of your Gemini activity.</p>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>Preferences</h2>
          <p className="section-description">
            Customize your Gemini experience.
          </p>
          <div className="settings-options">
            <div className="option-card">
              <h3>Theme</h3>
              <p>Switch between light and dark mode.</p>
            </div>
            <div className="option-card">
              <h3>Language</h3>
              <p>Change the display language.</p>
            </div>
            <div className="option-card">
              <h3>Notifications</h3>
              <p>Manage alert preferences.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;