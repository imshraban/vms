import React from "react";
import { useSaveVisitorData } from "../hooks/SaveVisitor";

const Modal = ({ isModalOpen, toggleModal }) => {
  const {
    visitorName,
    setVisitorName,
    contactNumber,
    setContactNumber,
    email,
    setEmail,
    companyName,
    setCompanyName,
    checkInTime,
    setCheckInTime,
    hostName,
    setHostName,
    purpose,
    setPurpose,
    handleSave,
    showSuccessMessage,
    errorMessage,
  } = useSaveVisitorData();

  
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <a className="close-btn" onClick={toggleModal} >
              <i class="fa-solid fa-x"></i>
            </a> */}
            <div>
              <div className="modal-body">
                <div>
                  {showSuccessMessage && (
                    <div className="alert alert-success" role="alert">
                      Visitor data saved successfully!
                    </div>
                  )}
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                </div>

                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="visitorName">Visitor Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="visitorName"
                        placeholder="Visitor Name"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="exm@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      placeholder="xyz private ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="checkInTime">Check-in Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="checkInTime"
                        value={checkInTime}
                        onChange={(e) => setCheckInTime(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="purpose">Purpose</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Meeting, visit"
                        id="purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="hostName">Host Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hostName"
                      placeholder="Host Name"
                      value={hostName}
                      onChange={(e) => setHostName(e.target.value)}
                    />
                  </div>
                </form>

                <div className="modal-footer d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-lg btn-block"
                    style={{
                      backgroundColor: "#ff6600",
                      borderColor: "#ff6600",
                      color: "#ffffff",
                    }}
                    onClick={handleSave}
                  >
                    <i className="fa-solid fa-paper-plane"></i> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
