import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();
    alert("Inserted");

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Student Added");
        setName("");
        setAge("");
        setGender("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form className="row g-3" onSubmit={sendData}>
        <div className="col-md-6">
          <label for="name" class="form-label">
            Student Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6">
          <label for="age" class="form-label">
            Age
          </label>
          <input
            type="text"
            class="form-control"
            id="age"
            placeholder="Enter Student Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div class="col-12">
          <label for="gender" class="form-label">
            Gender
          </label>
          <input
            type="text"
            class="form-control"
            id="gender"
            placeholder="Enter Student Gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
