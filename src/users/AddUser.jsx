import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

let navigate = useNavigate()

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    grade: "",
    course: "",
    city: "",
  });

  const { fname, lname, gender, grade, course, city } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/AddUser",user)
    navigate("/")
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          style={{ width: "450px" }}
        >
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="fname" className='"form-label'>
                fname{" "}
              </label>
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
              <label
                htmlFor="fname"
                className='"form-
label'
              >
                lname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your last name"
                name="lname"
                value={lname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="gender"
                className='"form-
label'
              >
                gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="city"
                className='"form-
label'
              >
                city
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your city"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="grade"
                className='"form-
label'
              >
                grade
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your grade"
                name="grade"
                value={grade}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="course"
                className='"form-
label'
              >
                course
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your course"
                name="course"
                value={course}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="cancel" className="btn btn-outline-danger mx-2">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
