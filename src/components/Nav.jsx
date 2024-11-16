import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Modal from "./Modal";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle the "Check In" modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Top bar */}
      <div
        className="top-bar  text-center text-dark py-1"
        style={{
          backgroundColor: "#ff6600",
          borderColor: "#ff6600",
          color: "#ffffff",
        }}
      >
        {/* <p className="mb-0">Copy @Conglomerate business solutions pvt ltd</p> */}
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand mx-auto d-lg-none" href="#">
            Gate Guardian
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#ff6600",
                    borderColor: "#ff6600",
                    color: "#ffffff",
                  }}
                  onClick={toggleModal} // Open "Check In" modal
                >
                  Check In
                </button>
              </li>
            </ul>

            <a className="navbar-brand d-none d-lg-block mx-auto" href="#">
              Gate Guardian
            </a>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#ff6600",
                    borderColor: "#ff6600",
                    color: "#ffffff",
                  }}
                  onClick={handleLogout} // Call handleLogout on click
                >
                  <i className="bi bi-box-arrow-in-right"></i> Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Modals */}
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Nav;
