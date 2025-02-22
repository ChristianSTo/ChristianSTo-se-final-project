import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../blocks/Nav.css";
import chicagoNewsLogo from "../assets/navbarIcon.svg";

function Nav({ signedIn, setIsSignedIn, setWarnStyle }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const displayNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <section className="nav">
      <div className="nav__logo">
        <img
          className="nav__img"
          src={chicagoNewsLogo}
          alt="Logo of Chicago skyline silhouette for Tidings from Chicago"
        ></img>
        <h2 className="nav__title">Tidings from Chicago</h2>
      </div>
      <ul
        className={`nav__container ${
          isNavOpen === true && "nav__container_visible"
        }`}
      >
        <NavLink to="/" className="nav__item-button">
          Home
        </NavLink>
        <NavLink to="/about" className="nav__item-button">
          About
        </NavLink>
        <NavLink to="/bookmarked" className="nav__item-button">
          Bookmarked Articles
        </NavLink>
      </ul>
      <div className="nav__status">
        {signedIn ? (
          <button
            type="button"
            className="nav__sign-button"
            onClick={() => setIsSignedIn(false)}
          >
            Sign out
          </button>
        ) : (
          <button
            type="button"
            className="nav__sign-button"
            onClick={() => setIsSignedIn(true)}
          >
            Sign in
          </button>
        )}
      </div>
      <button
        type="button"
        className="nav__burger-button"
        onClick={displayNav}
      ></button>
    </section>
  );
}

export default Nav;
