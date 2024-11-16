import React from "react";
import { useLogin } from "../hooks/LoginHooks";

const Login = () => {
  const { username, setUsername, password, setPassword, error, handleSubmit } =
    useLogin();

  return (
    <>
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
                providing a seamless experience for both staff and guests. It
                has transformed the way we manage visitors, making our processes
                more efficient and secure. Highly recommend it!
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
              <h2 className="login-h2">
                Effortless login for a seamless experience
              </h2>

              <form onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
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
                Create an Account ? <a href="/register">Sing up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
