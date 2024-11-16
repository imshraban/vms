import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginEntity from "../api/loginEntity"; 

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(121212);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginEntity.loginUser(username, password); 

      if (data.isLoggedin) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        navigate("/"); 
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("An error occurred during login.");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleSubmit,
  };
};
