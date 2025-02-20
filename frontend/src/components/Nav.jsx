import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../blocks/Nav.css";
import chicagoNewsLogo from "../assets/navbarIcon.svg";

function Nav({ signedIn, setIsSignedIn }) {
  return (
    <section className="nav">
      <div className="nav__logo">
        <img className="nav__img" src={chicagoNewsLogo}></img>
        <h2 className="nav__title">Tidings from Chicago</h2>
      </div>
      <ul className="nav__container">
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
    </section>
  );
}

export default Nav;
