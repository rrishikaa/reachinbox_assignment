import React from "react";
import "./form.css";

const FormSection = () => {
  return (
    <div className="container">
      <div class="google-login-box">
        <h2 style={{ color: "white" }}>Create a new account</h2>
        <button class="google-login-button">
          <img
            src="/Users/rishikasonker/Downloads/google_logo-removebg-preview.png"
            alt="Google Logo"
            class="google-logo"
          />
          <span>Sign in with Google</span>
        </button>
        <button className="sign-button">Create an Account</button>
        <p style={{ color: "white" }}>
          Already have an Account <span>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default FormSection;
