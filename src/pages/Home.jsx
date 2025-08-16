import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/AllUsers");
    setUsers(result.data);
  };
  return (
    <div>
      <div className="py-4">
        <table class="table" border shadow>
          <thead>
            <tr>
              <th scope="col">Student_id</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Cource</th>
              <th scope="col">Grade</th>
              <th scope="col">City</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.course}</td>
                <td>{user.city}</td>
                <td>{user.grade}</td>
                <td>{user.gender}</td>

                <td>
                  <button className="btn btn-primary mx =2">View</button>
                  <button className="btn btn-outline-primary mx =2">Update</button>
                  <button className="btn btn-danger mx =2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
