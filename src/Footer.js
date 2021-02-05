import React from 'react';
import './Footer.css';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <>
    <div className="social-container">
      <NavLink
        to="https://www.facebook.com/elixirHealthSociety/"
        className="facebook social" target = "blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </NavLink>
      <NavLink to="#" 
      className="twitter social" target = "blank">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </NavLink>
      <NavLink
        to="https://www.instagram.com/elixir.healthsociety/?hl=en"
        className="instagram social" target = "blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </NavLink>
    </div>
    </>
  );
}
