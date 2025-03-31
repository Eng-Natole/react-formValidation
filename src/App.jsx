import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confitmPassword: "",
    successMsg: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateFormInput = (event) => {};

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Simple Form</h4>
        </div>
        <div className="card-body">
          <form onSubmit={validateFormInput}>
            {/*email input*/}
            <p className="label">Email</p>
            <input
              value={formInput.email}
              onChange={({ target }) => {
                name = "email";
                type = "text";
                className = "input";
                placeholder = "enter email";
              }}
            />
            <p className="error-message">{formError.email}</p>

            <p className="label">password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                name = "email";
                type = "password";
                className = "input";
                placeholder = "enter password";
              }}
            />
            <p className="error-message">{formError.password}</p>

            <p className="label">confirm password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                name = "confirmPassword";
                type = "confirmPassword";
                className = "input";
                placeholder = "enter confirm Password";
              }}
            />
            <p className="error-message">{formError.confirmPassword}</p>

            <p className="error-message">{formError.confirmPassword}</p>
            <p className="success-message">{formInput.successMsg}</p>

            <input type="submit" className="btn" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
