import React, { useState, useEffect } from "react";
import axios from "axios";

function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.meassage);
        });
    }
    getStudents();
  }, []);

  return (
    <div className="container">
      <h1>AllStudent</h1>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Extra</th>
          </tr>
        </thead>
        <tbody>
          {students.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    Update
                  </button>
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudent;
