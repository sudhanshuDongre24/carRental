import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/logo/logo.png";
import { IconMenu2, IconX } from "@tabler/icons-react";
import "./style.scss";

// Hamburger has to been updated properly
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav>
        {/* Mobile */}
        <div className={`mobile--navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile--navbar__close">
            <IconX width={30} height={30} />
          </div>

          <ul className="mobile--navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="log-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="test-link" to="/testimonials">
                Testimonials
              </Link>
            </li>

            <li>
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>

            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons--signin" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons--register" to="/">
              Register
            </Link>
          </div>

          {/* Mobile */}
          <div className="mobile--hamb" onClick={openNav}>
            <IconMenu2 height={30} width={30} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
