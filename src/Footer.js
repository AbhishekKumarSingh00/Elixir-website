import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.facebook.com/elixirHealthSociety/"
        className="facebook social" target = "blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" 
      className="twitter social" target = "blank">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/elixir.healthsociety/?hl=en"
        className="instagram social" target = "blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
