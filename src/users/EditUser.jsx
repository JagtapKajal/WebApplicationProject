import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    fname: "",
    LastName: "",
    Course: "",
    Grade: "",
    City: "",
    Gender: "",
  });

  const { fname, LastName, Course, Grade, City, Gender } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/user/${id}`,
      setUser
    )(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="container vh-100 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg p-2"
            style={{ width: "500px", borderRadius: "10px", position: "fixed" }}
          >
            <h2 className="text-center m-4">Edit User</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your first name"
                  name="fname"
                  value={fname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your last name"
                  name="LastName"
                  value={LastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Course</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your course name"
                  name="Course"
                  value={Course}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Grade</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your grade"
                  name="Grade"
                  value={Grade}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your city"
                  name="City"
                  value={City}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your gender"
                  name="Gender"
                  value={Gender}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
