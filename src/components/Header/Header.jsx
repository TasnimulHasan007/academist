import React from "react"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          {/* brand */}
          <div>
            <NavLink to="/home" className="brand">
              <i className="fas fa-graduation-cap"></i> Academist
            </NavLink>
          </div>
          {/* nav links */}
          <ul className="nav-links">
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
