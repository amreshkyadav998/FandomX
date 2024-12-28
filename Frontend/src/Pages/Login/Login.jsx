import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false); // state to control modal visibility

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    // Connecting frontend to backend 
    try {
      // const response = await fetch(`http://localhost:3000/api/auth/login`, {
      const response = await fetch(`https://fandomxbackendd.onrender.com/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setShowModal(true); // Show the modal if login is successful
      } else {
        console.log('Login failed');
      }

    } catch (error) {
      console.log("Login error:", error);
    }

    // Reset the form fields
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <section className="login-section">
      <main className="login-main">
        <div className="section-login">
          <div className="login-container grid grid-two-cols">
            <div className="login-image">
              <img
                src="/assets/login.png"
                alt="Login illustration"
                className="login-image-img"
              />
            </div>

            {/* Login form */}
            <div className="login-form">
              <h1 className="login-form-heading">
                LOGIN
              </h1>
              <form onSubmit={handleSubmit} className="login-form-fields">
                <div className="login-form-field">
                  <label htmlFor="email" className="login-form-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                    className="login-form-input"
                  />
                </div>
                <div className="login-form-field">
                  <label htmlFor="password" className="login-form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                    className="login-form-input"
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Login
                </button>
              </form>
              <p className="signup-redirect">
                Not registered?{" "}
                <NavLink to="/signup" className="signup-link">
                  Signup here
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Login Successful!</h2>
            <p>Welcome back! You have successfully logged in.</p>
            <button onClick={() => setShowModal(false)} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
