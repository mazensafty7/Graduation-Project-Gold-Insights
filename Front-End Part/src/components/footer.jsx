import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer pt-5" >
        <div className="f-foot">
          <img src="./assests/foooter.png" alt="Footer Logo" className="mx-auto" width="300px" />
        </div>

        <div className="logos">
          <hr className="border-top border-3 border-light" />
          <a href="https://www.facebook.com/profile.php?id=100045345762186">
            <i className="fab fa-facebook" style={{ color: "rgb(176, 155, 104)" }}></i>
          </a>
          <a href="https://wa.me/yourwhatsappnumber">
            <i className="fab fa-whatsapp" style={{ color: "rgb(176, 155, 104)" }}></i>
          </a>
          <a href="https://youtube.com/yourchannel">
            <i className="fab fa-youtube" style={{ color: "rgb(176, 155, 104)" }}></i>
          </a>
          <a href="https://linkedin.com/yourprofile">
            <i className="fab fa-linkedin" style={{ color: "rgb(176, 155, 104)" }}></i>
          </a>
          <hr className="border-top border-3 border-light" />
        </div>

        <h4 className="copy text-center">
          Copyright &copy; 2025 Gold Insights, Good Company. All rights reserved.
        </h4>
        <br />
      </div>
    </div>
  );
};

export default Footer;

