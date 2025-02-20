import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddStudent = () => {
  // State to store student info
  const [student, setStudent] = useState({ name: "", admissionNumber: "" });

  // Handle input change
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.admissionNumber) {
      toast.error("All fields are required!");
      return;
    }

    // Sending POST request to add student
    axios.post("http://localhost:5000/add-student", student)
      .then((response) => {
        toast.success("Student added successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add student!");
      });
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Student Name" onChange={handleChange} required />
        <input type="text" name="admissionNumber" placeholder="Admission Number" onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
