import React from "react";

function AddUser() {
  return (
    <div className="container">
      Add Student Form
      <div className="row">
        <div classname="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Registration Form</h2>
          <div className="mb-3">
            <label htmlFor="First Name" className="form-label">
              First Name
            </label>

            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your first name"
              name="First name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LAst Name" className="form-label">
              Last Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your last name"
              name="Last name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Course" className="form-label">
              Course
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your course name"
              name="Course"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Grade" className="form-label">
              Grade
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your grade "
              name="Grade"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="City" className="form-label">
              City
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your city "
              name="City"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Gender" className="form-label">
              Gender
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your gender"
              name="Gender"
            />
          </div>

          <button type = "Submit" className = "btn btn-outline-primary">Submit</button>
                    <button type = "Cancel" className = "btn btn-outline-danger mx-2">Cancel</button>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
