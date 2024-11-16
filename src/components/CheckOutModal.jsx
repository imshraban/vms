import React, { useState } from "react";
import { formatDateWithTime, handleSubmit } from "../hooks/CheckOut";

const CheckOutModal = ({
  isCheckOutModalOpen,
  toggleCheckOutModal,
  selectedVisitorId,
  selectedVisitorContactNumber,
}) => {
  const [checkOutTime, setCheckOutTime] = useState("");
  const [checkedOut, setCheckedOut] = useState("False");
  const [responseMessage, setResponseMessage] = useState(""); // State for API response message

  const onSubmit = () => {
    handleSubmit(
      checkOutTime,
      checkedOut,
      selectedVisitorId,
      selectedVisitorContactNumber,
      setCheckOutTime,
      setCheckedOut,
      toggleCheckOutModal,
      setResponseMessage // Pass this to handleSubmit to update message on response
    );
  };

  return (
    <>
      {isCheckOutModalOpen && (
        <div className="modal-overlay2" onClick={toggleCheckOutModal}>
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn2" onClick={toggleCheckOutModal}>
              <i className="fa-solid fa-rectangle-xmark"></i>
            </button>

            <div className="modal-body2">
              {/* Display the visitor ID */}
             
              <p>{responseMessage}</p> 
              <div className="form-group">
                <label htmlFor="cktime">Check Out Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="cktime"
                  value={checkOutTime}
                  onChange={(e) => setCheckOutTime(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputState">Checked Out</label>
                <select
                  id="inputState"
                  className="form-control"
                  value={checkedOut}
                  onChange={(e) => setCheckedOut(e.target.value)} 
                >
                  <option value="False">False</option>
                  <option value="True">True</option>
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#ff6600",
                    borderColor: "#ff6600",
                    color: "#ffffff",
                  }}
                  onClick={onSubmit}
                >
                  <i className="fa-solid fa-paper-plane"></i> Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOutModal;
