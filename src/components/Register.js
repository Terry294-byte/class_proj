import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  // State to store form input values
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const history = useHistory();

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      toast.error("All fields are required!");
      return;
    }

    // Sending POST request to register user
    axios.post("http://localhost:5000/register", user)
      .then((response) => {
        toast.success("Registration successful!");
        history.push("/login"); // Redirect to login
      })
      .catch((error) => {
        toast.error("Registration failed!");
      });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
