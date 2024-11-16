import React, { useState } from "react";
import useSignup from "../hooks/Singup";

const Register = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    role,
    setRole,
    sitting,
    setSitting,
    username,
    setUsername,
    password,
    setPassword,
    successMessage,
    errorMessage,
    handleSubmit,
  } = useSignup(); // Use the hook

  return (
    <div className="container-fluid d-flex vh-100">
      <div className="row w-100">
        {/* Left Side - Info Section  */}
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-light login-left-section">
          <h1>Visitor Management System</h1>
          <p className="text-center">
            Streamlining Security and Enhancing Guest Experience!
          </p>
          <div className="login-testimonial-box text-center">
            <p className="login-testimonial-text">
              This visitor management system is a game-changer! It’s
              user-friendly, enhances security, and simplifies check-ins,
              providing a seamless experience for both staff and guests. It has
              transformed the way we manage visitors, making our processes more
              efficient and secure. Highly recommend it!
            </p>
            <div className="d-flex align-items-center justify-content-center mt-3">
              {/* <img
                src="user-avatar.jpg"
                alt="User"
                className="login-testimonial-avatar"
              /> */}
              <div className="ml-2">
                <p className="mb-0">
                  <strong>
                    <a href="http://cbsiot.live/">cbsiot.live</a>
                  </strong>
                </p>
                <small>Copy @conglomerate business solutions pvt ltd</small>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Form Section  */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center login-form-section">
          <div className="login-form-container">
            <h2 className="login-h2">Create an account</h2>
            {/* Display messages */}
            {errorMessage && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p style={{ color: "green", textAlign: "center" }}>
                {successMessage}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="" disabled selected>
                    Please select Role
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="NormalUser">Normal User</option>
                  {/* Add more options as needed  */}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Branch Location"
                  value={sitting}
                  onChange={(e) => setSitting(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacyPolicy"
                  required
                />
                <label className="login-form-check-label" for="privacyPolicy">
                  I accept the <a href="#">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="btn login-btn-orange btn-block"
                style={{
                  backgroundColor: "#ff6600",
                  borderColor: "#ff6600",
                  color: "#ffffff",
                }}
              >
                Create an Account
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;