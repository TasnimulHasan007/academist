import React from "react"
import { Container, Row } from "react-bootstrap"
import Course from "../Course/Course"
import "./Services.css"

const Services = (props) => {
  return (
    <div>
      <Container className="py-5">
        <div className="title">
          <h1>Our Services</h1>
          <div className="underline mx-auto"></div>
        </div>
        <Row className="g-4 mt-2">
          {props.courses.map((course) => (
            <Course key={course.key} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services
