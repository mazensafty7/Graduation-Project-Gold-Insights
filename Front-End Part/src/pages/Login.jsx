import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Authcontext";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://c8d8-197-48-90-154.ngrok-free.app/auth/login",
        { email, password }
      );

      // لو الدخول ناجح
      if (res.status === 200 && res.data.success) {
        setMessage({ text: "Login successful!", type: "success" });
        
        // تخزين التوكن والمستخدم (لو تحتاجهم لاحقًا)
       login(res.data.user);

        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        // حالة الخطأ - من غير 401 (مثلاً 400)
        setMessage({
          text: "Invalid email or password. Please try again.",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response && err.response.status === 401) {
        setMessage({
          text: "Invalid email or password. Please try again.",
          type: "error",
        });
      } else {
        setMessage({
          text: "Something went wrong. Please try again later.",
          type: "error",
        });
      }
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
              <h2 style={{ fontFamily: "Trebuchet MS" }}>Login</h2>
              <div className="line mx-auto"></div>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit" className="loginbtn" id="sign_in">
                Login
              </button>

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
                Do you have an account?{" "}
                <span>
                  <a style={{ textDecoration: "none" }} href="/register">
                    Register
                  </a>
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

export default Login;