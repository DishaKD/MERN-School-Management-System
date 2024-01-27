import React from "react";

export default function AddStudent() {
  return (
    <div className="container">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="name" class="form-label">
            Student Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Student Name"
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
