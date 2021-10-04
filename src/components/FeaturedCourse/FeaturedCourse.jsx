import React from "react"
import { Col } from "react-bootstrap"
import "./FeaturedCourse.css"

const FeaturedCourse = (props) => {
  // deconstrunction
  const { name, price, img } = props.course
  // return
  return (
    <Col md={6}>
      <div className="featured h-100 d-flex flex-column justify-content-between">
        <img src={img} alt="" className="img-fluid" />
        <h3>{name}</h3>
        <span>Price: ${price}</span>
      </div>
    </Col>
  )
}

export default FeaturedCourse
