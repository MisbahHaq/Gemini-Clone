import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Help.css';

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="help-page">
      <div className="help-top-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Help</h1>
      </div>

      <div className="help-container">
        <section className="help-section">
          <h2>Frequently Asked Questions</h2>
          <p className="section-description">
            Find answers to common questions about Gemini.
          </p>
          <div className="help-options">
            <div className="help-card">
              <div className="help-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <h3>What is Gemini?</h3>
              </div>
              <p>Gemini is an AI assistant that can help you with a wide range of tasks, from answering questions to generating creative content.</p>
            </div>

            <div className="help-card">
              <div className="help-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <h3>How is my data protected?</h3>
              </div>
              <p>Your privacy is important. Gemini follows strict data protection policies and you can manage your data in Settings.</p>
            </div>

            <div className="help-card">
              <div className="help-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <h3>How do I get started?</h3>
              </div>
              <p>Simply type a question or request in the chat box, and Gemini will respond. Try asking about topics you're curious about!</p>
            </div>

            <div className="help-card">
              <div className="help-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <h3>What can Gemini do?</h3>
              </div>
              <p>Gemini can answer questions, write content, analyze data, brainstorm ideas, summarize text, and much more.</p>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2>Contact Support</h2>
          <p className="section-description">
            Need more help? Reach out to our support team.
          </p>
          <div className="help-options">
            <div className="help-card action-card">
              <div className="action-content">
                <h3>Send Feedback</h3>
                <p>Share your thoughts and report issues.</p>
              </div>
              <svg className="action-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="help-card action-card">
              <div className="action-content">
                <h3>Report a Bug</h3>
                <p>Help us improve by reporting errors.</p>
              </div>
              <svg className="action-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2>Resources</h2>
          <p className="section-description">
            Learn more about using Gemini effectively.
          </p>
          <div className="help-options">
            <div className="help-card resource-card">
              <h3>Getting Started Guide</h3>
              <p>A comprehensive tutorial for new users.</p>
            </div>
            <div className="help-card resource-card">
              <h3>Best Practices</h3>
              <p>Tips for getting the most out of Gemini.</p>
            </div>
            <div className="help-card resource-card">
              <h3>API Documentation</h3>
              <p>Technical reference for developers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;