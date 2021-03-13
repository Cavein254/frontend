import React from "react";
import { FaCoffee, FaHeart } from "react-icons/fa";

function FooterLove() {
  return (
    <div className="footer_closing">
      <h4>
        Made with{" "}
        <span className="footer_icon_closing">
          <FaHeart />
        </span>{" "}
        and several mugs of{" "}
        <span className="footer_icon_closing">
          <FaCoffee />
        </span>
      </h4>
    </div>
  );
}

export default FooterLove;
