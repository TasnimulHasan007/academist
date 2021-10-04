import React from "react"
import { Container } from "react-bootstrap"
import notFoundImg from "./img/notFound.svg"
import "./NotFound.css"

const NotFound = () => {
  return (
    <Container>
      <div className="not-found d-flex flex-column align-items-center justify-content-center text-center py-5">
        <h2>404</h2>
        <h3>Opps! That coudn't be found!</h3>
        <img src={notFoundImg} alt="" />
      </div>
    </Container>
  )
}

export default NotFound
