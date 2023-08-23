import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //   submit handler
  const onSubmit = async (e) => {
    e.preventDefault();
        try {
          await axios
            .post("https://localhost:3000/", {
              email,
              pass,
            })
            .then((res) => {
              if (res.data === "exist") {
                navigate("/homepage");
              }
            });
        } catch (e) {
          if (email === "admin@gmail.com" && pass === "1234") {
            alert("Login sucessfully");
            navigate("/homepage");
          } else {
            alert("Wrong credentials");
          }
        }
  };

  return (
    <div className="container">
      <div className="auth-form-container">
        <h1>Login to your account</h1>
        <form className="login-form" onSubmit={onSubmit}>
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
          <label>
            <input type="checkbox" name="remember" />
            Remember me
            <label
              htmlFor="forgotpass"
              style={{ marginLeft: "90px", color: "#7439db" }}
            >
              <b>Forgot password?</b>
            </label>
          </label>
          <button className="login" type="submit">
            Login now
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register here.
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

export default Login;
