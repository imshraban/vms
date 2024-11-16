import { useState, useEffect } from "react";
import VisitorEntity from "../api/visitorEntity"; 

export const useSaveVisitorData = () => {
  const [visitorName, setVisitorName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [hostName, setHostName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [sitting, setSitting] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUsername(parsedUser.username);
      setSitting(parsedUser.sitting);
    }
  }, []);

  const formatDateWithTime = (time) => {
    const today = new Date();
    const datePart = today.toISOString().split("T")[0];
    return `${datePart} ${time}`;
  };

  const handleSave = async () => {
    const formattedCheckInTime = checkInTime ? formatDateWithTime(checkInTime) : "";

    const formData = {
      visitor_name: visitorName,
      contact_number: contactNumber,
      email,
      company_name: companyName,
      check_in_time: formattedCheckInTime,
      host_name: hostName,
      purpose,
      auth_by: username,
      auth_sitting: sitting,
    };

    try {
      const responseData = await VisitorEntity.saveVisitor(formData); 
      console.log("API Response:", responseData);

      setShowSuccessMessage(true);
      setErrorMessage("");

      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Error saving visitor data:", error);
      setErrorMessage("Something went wrong, please try again.");
      setShowSuccessMessage(false);
    }
  };

  return {
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
    username,
    sitting,
  };
};
