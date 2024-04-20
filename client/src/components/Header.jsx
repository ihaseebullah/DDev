import Ddev from "../assets/Ddev Logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={Ddev}
            alt="DDev Logo"
            width={30}
            height={24}
            className="mr-2 mb-2"
          />
          DDev AI
        </a>

        {/* Links */}
        <div className="ms-auto">
          <ul className="navbar-nav navbar-links">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Haseeb Ullah:
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/ihaseeb-ullah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/ihaseebullah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/ihaseebullahtarakai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://x.com/HaseebU38243426?t=XLWBIXag8ZwSNpm1vewMjQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://stackoverflow.com/users/21397223/haseeb-ullah-tarakai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
