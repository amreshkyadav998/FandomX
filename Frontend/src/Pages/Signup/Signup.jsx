import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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

    try {
        const response = await fetch(`https://fandomxbackendd.onrender.com/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Ensures cookies are sent/received
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        setShowModal(true); // Show the modal if registration is successful

    } catch (error) {
        console.error("Registration error:", error);
    }

    setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
};

  return (
    <section className="signup-section">
      <main className="signup-main">
        <div className="signup-container">
          <div className="signup-image">
            <img
              src="/assets/signup.png"
              alt="a nurse with a cute look"
              className="signup-img"
            />
          </div>

          {/* Registration Form */}
          <div className="signup-form">
            <h1 className="signup-heading">
              SIGNUP
            </h1>
            <form onSubmit={handleSubmit} className="signup-form-fields">
              <div className="signup-form-field">
                <label htmlFor="username" className="signup-label">Username</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  placeholder="Username"
                  className="signup-input"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="email" className="signup-label">Email</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                  className="signup-input"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="phone" className="signup-label">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={handleInput}
                  className="signup-input"
                />
              </div>
              <div className="signup-form-field">
                <label htmlFor="password" className="signup-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                  className="signup-input"
                />
              </div>
              <button type="submit" className="btn-submit">
                Register Now
              </button>
            </form>
            <p className="already-registered">
              Already registered?{" "}
              <Link
                to={{
                  pathname: "/login",
                  state: { email: user.email, password: user.password },
                }}
                className="login-link"
              >
                Click here to Login
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Registration Successful!</h2>
            <p>Welcome! Your account has been created successfully.</p>
            <button onClick={() => setShowModal(false)} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Signup;
