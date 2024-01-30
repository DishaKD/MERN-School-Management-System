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
      <p></p>
    </div>
  );
}

export default AllStudent;
