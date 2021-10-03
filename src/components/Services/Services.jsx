import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import Course from "../Course/Course"
import "./Services.css"

const Services = () => {
  // state
  const [courses, setCourses] = useState([])

  // use effects
  useEffect(() => {
    fetch("./coursesData/coursesData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  return (
    <div>
      <Container className="py-5">
        <div className="title">
          <h1>Our Services</h1>
          <div className="underline mx-auto"></div>
        </div>
        <Row className="g-4 mt-2">
          {courses.map((course) => (
            <Course key={course.key} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services
