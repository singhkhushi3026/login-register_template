import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && pass !== "") {
      alert("Register Successfully!!");
    } else {
      alert("Incomplete details, please fill properly!!");
    }
  };

  return (
    <div className="container">
      <div className="auth-form-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
            required
            style={{ width: "300px" }}
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
            style={{ width: "300px" }}
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
            style={{ width: "300px" }}
          />
          <button className="register" type="submit">
            Register now
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate("/")}
        >
          Already have an account? Login here.
        </button>
      </div>
      <div className="container-2">
        <div className="card">
          Check out the very good works that <br /> are waiting for you,
          <br />
          <b>Log in </b>now
        </div>
      </div>
    </div>
  );
};

export default Register;
