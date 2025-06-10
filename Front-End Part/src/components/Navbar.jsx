import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/Authcontext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    logout();
    navigate("/register");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="gold-logo">
            <NavLink to="/home">
              <img src="./assests/Logo 7.png" alt="Gold Logo" height="90px" />
            </NavLink>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {!isAuthPage && (
              <>
                <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                  <li className="nav-item karakeri">
                    <NavLink to="/forecasting" className="nav-link active">
                      Forecasting
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/news" className="nav-link active">
                      Gold news
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/experts" className="nav-link active">
                      Gold experts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/learn" className="nav-link active">
                      Learn to trade
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/analysis" className="nav-link active">
                      Gold Analysis
                    </NavLink>
                  </li>
                </ul>

                <form className="d-flex ms-5">
                  <input
                    className="form-control me-2 rounded-pill search-btn"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </>
            )}

            {user ? (
              <ul className="d-flex align-items-center ms-auto" style={{ listStyle: "none" }}>
                <li style={{ marginRight: "10px", fontWeight: "bold", fontSize: "20px" }}>
                  {user.firstname}
                </li>
                <li>
                  <button onClick={handleLogout} className="btn btn-lg login-btn rounded-pill">
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="d-flex align-items-center ms-auto">
                <li>
                  <NavLink to="/login" className="btn btn-lg login-btn rounded-pill me-2">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className="btn btn-lg login-btn rounded-pill">
                    Signup
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;