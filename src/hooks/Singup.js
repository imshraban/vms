// Signup.js
import { useState } from "react";
import signupEntity from "../api/loginEntity";

const useSignup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [sitting, setSitting] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      full_name: fullName,
      email: email,
      role: role,
      sitting: sitting,
      username: username,
      password: password,
    };

    try {
      const response = await signupEntity.createUser(requestBody);

      if (response.success) {
        setSuccessMessage("Your account was created successfully!");
        setErrorMessage("");
      } else {
        setSuccessMessage("Your account was created successfully!");
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
      console.error("Error creating account:", error);
    }
  };

  return {
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
  };
};

export default useSignup;
