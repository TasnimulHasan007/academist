import React from "react"
import { Col } from "react-bootstrap"
import "./Course.css"

const Course = (props) => {
  const { img, name, description, price, subjects } = props.course
  return (
    <Col lg={4} md={6} s={12}>
      <div className="course-card h-100 d-flex flex-column justify-content-between">
        <div>
          <img src={img} alt="" className="img-fluid" />
          <h3 className="px-3 pt-3">{name}</h3>
          <p className="px-3 text-break">{description}</p>
          <div className="px-3">
            <h4 className="fs-5 fw-normal">Subjects :</h4>
            {subjects.map((subject) => (
              <span key={subject} className="subject">
                {subject}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="price py-3 px-3">Price: ${price}</h4>
          <button className="main-btn mx-3 mb-3">Enroll Now</button>
        </div>
      </div>
    </Col>
  )
}

export default Course
