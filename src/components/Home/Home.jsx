import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import FeaturedCourse from "../FeaturedCourse/FeaturedCourse"
import "./Home.css"

const Home = (props) => {
  // data
  const courses = props.courses.slice(0, 4)
  // return
  return (
    <Container>
      <Row className="my-5">
        <Col md={6} s={12}>
          <div className="d-flex justify-content-between align-items-center featured-header">
            <h3>SERVICES WE OFFER</h3>
            <Link to="/services" className="main-btn">
              See all
            </Link>
          </div>
          <Row className="featured-courses g-4 mx-5 mt-2">
            {courses.map((course) => (
              <FeaturedCourse key={course.key} course={course}></FeaturedCourse>
            ))}
          </Row>
        </Col>
        <Col
          md={6}
          s={12}
          className="form d-flex flex-column justify-content-center"
        >
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h4>BOOK A FREE LESSON</h4>
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className="inputs">
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-container">
              <i className="fas fa-phone"></i>
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <button className="main-btn">Book Now</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
