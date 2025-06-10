import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" }); // للرسالة

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://c8d8-197-48-90-154.ngrok-free.app/auth/register",
        formData
      );
      console.log("User registered:", res.data);
      setMessage({ text: "✅ Registered successfully!", type: "success" });

      // الانتقال بعد فترة قصيرة
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);
      setMessage({
        text: "❌ Error during registration. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="logpage">
        <div className="overlay"></div>
        <section className="section-form shadow">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <h2
                style={{
                  fontFamily:
                    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                }}
              >
                Sign Up
              </h2>
              <div className="line mx-auto"></div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <br />
              <button type="submit" className="loginbtn" id="sign_up">
                Signup
              </button>

              {/* ✅ رسالة النجاح أو الخطأ */}
              {message.text && (
                <p
                  style={{
                    color: message.type === "success" ? "green" : "red",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {message.text}
                </p>
              )}

              <p style={{ color: "rgb(133, 133, 133)" }}>
                Already have an account?{" "}
                <span>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Sign in
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Register;