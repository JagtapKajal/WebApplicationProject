import React from "react";

function ViewUser() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="container vh-100 d-flex justify-
content-center align-items-center"
        >
          <h2
            className="text-center m-
4"
          >
            User Details
          </h2>
          <div className = "card">
            <div className = "card-header">
                Details of user id :
                <ul className = "list-group list-group-flush">
                    <li className ="list-group-item">
                        <b>Name: </b>
                    </li>
                    <li></li>
                </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ViewUser;
