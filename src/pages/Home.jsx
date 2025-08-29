import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/AllUsers");
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered table-striped text-center mb-0 w-100">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">City</th>
                <th scope="col">Grade</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id || index}>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.gender}</td>
                  <td>{user.city}</td>
                  <td>{user.grade}</td>
                  <td>{user.course}</td>
                  <td>
                    <button className="btn btn-primary mx-2">View</button>
                    <button className="btn btn-outline-primary mx-2">
                      Edit
                    </button>
                    <button className="btn btn-danger mx-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
