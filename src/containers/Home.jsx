import React, { useState } from "react";
import { handleTodayCheckboxChange } from "../handler/Todaydate";
import { handleYesterdayCheckboxChange } from "../handler/Yesterdaydate";
import { useTimeRange } from "../handler/TimeRange";
import { useDateRange } from "../handler/DateRange";
import { useVisitorData } from "../hooks/Visitor";
import { uiformatDate } from "../helper/uiformatDate";
import { formatTimeWithDate } from "../helper/formatTimeWithDate";
import CheckOutModal from "../components/CheckOutModal";


const Home = () => {
  const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
  const [selectedVisitorId, setSelectedVisitorId] = useState(null);
  const [selectedVisitorContactNumber, setSelectedVisitorContactNumber] =
    useState("");

  const { timeValue, handleTimeRangeChange } = useTimeRange();
  const {
    selectedRange,
    daysDifference,
    handleDateRangeChange,
    getSelectedDate,
  } = useDateRange();
  const { visitors } = useVisitorData();

  // Format the selected date to MM/DD/YYYY
  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Function to toggle "Check Out" modal visibility
  const toggleCheckOutModal = () => {
    setIsCheckOutModalOpen(!isCheckOutModalOpen);
  };

  // Function to handle Check Out button click and set visitor ID
  const handleCheckOutClick = (id, contactNumber) => {
    setSelectedVisitorId(id);
    setSelectedVisitorContactNumber(contactNumber);
    toggleCheckOutModal();
  };

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-3">
            <div className="filter-section">
              <h5>Date</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(event) =>
                    handleTodayCheckboxChange(event, visitors)
                  }
                />
                <label className="form-check-label">Today</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleYesterdayCheckboxChange}
                />
                <label className="form-check-label">Yesterday</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">All</label>
              </div>
              <hr />
              <h5>Times Select</h5>
              <p>select: 00:00 - {parseInt(timeValue)}.00</p>
              <input
                type="range"
                className="custom-range"
                min="0"
                max="24"
                value={parseInt(timeValue)}
                onChange={handleTimeRangeChange}
                style={{ "--value": `${(parseInt(timeValue) / 24) * 100}%` }}
              />
              <hr />
              <h5>Date Range Select</h5>
              <p>{`Selected Date: ${formatDate(getSelectedDate())}`}</p>
              <input
                type="range"
                className="custom-range"
                min="0"
                max={daysDifference}
                value={selectedRange}
                onChange={handleDateRangeChange}
                style={{
                  "--value": `${(selectedRange / daysDifference) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Visitor Data Display */}
          <div className="col-md-9 div-hover">
            {visitors.length > 0 ? (
              visitors.map((visitor) => (
                <a
                  href="#"
                  key={visitor.id}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCheckOutClick(visitor.id, visitor.contact_number); 
                  }}
                >
                  <div className="flight-card d-flex align-items-center mb-3">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Visitor Avatar"
                      className="logo"
                    />
                    <div className="mx-4">
                      <p className="flight-info mb-0">
                        {formatTimeWithDate(visitor.check_in_time)} -{" "}
                        {uiformatDate(visitor.check_out_time) || "00:00:00"}
                      </p>
                      <p className="duration mb-0">{visitor.purpose}</p>
                      <p className="location mb-0">{visitor.host_name}</p>
                      <p>{visitor.auth_by} <span>({visitor.auth_sitting})</span></p>
                    </div>
                    <div className="price-section ml-auto text-right">
                      <p className="price">{visitor.visitor_name}</p>
                      <p>{visitor.contact_number}</p>
                      <p>{visitor.company_name}</p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p>No visitor data available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <CheckOutModal
        isCheckOutModalOpen={isCheckOutModalOpen}
        toggleCheckOutModal={toggleCheckOutModal}
        selectedVisitorId={selectedVisitorId}
        selectedVisitorContactNumber={selectedVisitorContactNumber} // New prop
      />
    </>
  );
};

export default Home;
