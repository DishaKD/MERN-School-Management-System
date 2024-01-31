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
          {students &&
            students.map((students) => {
              return (
                <tr key={students._id}>
                  <td>{students.name}</td>
                  <td>{students.age}</td>
                  <td>{students.gender}</td>
                  <td>
                    <a href={`/update/${students._id}`}>
                      <button type="button" class="btn btn-outline-primary">
                        Update
                      </button>
                    </a>
                    &nbsp; &nbsp;&nbsp;&nbsp;
                    <a href={`/delete/${students._id}`}>
                      <button type="button" class="btn btn-outline-danger">
                        Delete
                      </button>
                    </a>
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
