import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="gx-5 footer-container">
          <Col md={12} lg={6}>
            <NavLink to="/home" className="brand">
              <i className="fas fa-graduation-cap"></i> Academist
            </NavLink>
            <div className="details">
              <h4>10000+ Satisfied Students</h4>
              <div className="d-flex">
                <i className="fas fa-quote-left fa-2x"></i>
                <p>
                  The variety of courses is amazing. No other online course
                  platform comes close to offering as many courses on as many
                  subjects.
                </p>
              </div>
              <h5> - Jane Smith</h5>
            </div>
          </Col>
          <Col md={6} lg={3} xs={12}>
            <h3>Popular Courses</h3>
            <div className="details">
              <div className="d-flex justify-content-between link">
                <p>English For Kids</p>
                <p>$45</p>
              </div>
              <div className="d-flex justify-content-between link">
                <p>Online Learning</p>
                <p>$15</p>
              </div>
              <div className="d-flex justify-content-between link">
                <p>German Club</p>
                <p>$35</p>
              </div>
              <div className="d-flex justify-content-between link">
                <p>Personal Lesson</p>
                <p>$21</p>
              </div>
              <div className="d-flex justify-content-between link">
                <p>Group Lesson</p>
                <p>$35</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} xs={12}>
            <h3>Get in touch</h3>
            <div className="details">
              <span className="link">Send a message</span>
              <span className="link">Contacts</span>
              <span className="link">Request Callback</span>
              <div>
                <i className="fab fa-facebook pe-3 link"></i>
                <i className="fab fa-twitter pe-3 link"></i>
                <i className="fab fa-instagram pe-3 link"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright py-3">
        <Container>
          <span> Copyright &copy; Academist | 2021 </span>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
