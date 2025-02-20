import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  // State for login credentials
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const history = useHistory();

  // Handle input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      toast.error("All fields are required!");
      return;
    }

    // Sending POST request for login
    axios.post("http://localhost:5000/login", credentials)
      .then((response) => {
        toast.success("Login successful!");
        history.push("/dashboard"); // Redirect to dashboard
      })
      .catch((error) => {
        toast.error("Invalid credentials!");
      });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
