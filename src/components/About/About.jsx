import React from "react"
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import "./About.css"
import aboutImg from "./img/about.png"

const About = () => {
  return (
    <div>
      {/* banner top */}
      <div className="banner-top">
        <Container>
          <div className="title">
            <h1>About Us</h1>
            <div className="underline mx-auto"></div>
          </div>
          <p>
            Academists is an American massive open online course provider aimed
            at professional adults and students. Currently the platform has more
            than 44 million students, 183,000 courses and 65,000 instructors
            teaching courses in 75 languages.
          </p>
        </Container>
      </div>
      {/* choose academist */}
      <Container>
        <Row className="choose-academist d-flex align-items-center my-5">
          <Col md={6}>
            <div className="title">
              <h1>Choose Academist</h1>
              <div className="underline"></div>
              <p>
                Academist is the global e-learning marketplace. Anyone can take
                a course on the platform, and anyone can publish and sell a
                course. According to Academist’s official statistics over
                30,000,000 people have taken a course on Academist, and the
                overall number of enrolments has surpassed 190,000,000. The
                platform features 100,000 courses from 42,000 instructors around
                the world. These figures make Academist the one global platform
                for online learning.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="progress-bars">
              <h4>Mentorship</h4>
              <ProgressBar
                className="bar"
                now={78}
                label={"78%"}
                variant="danger"
              />
              <h4>Education</h4>
              <ProgressBar
                className="bar"
                now={95}
                label={"95%"}
                variant="danger"
              />
              <h4>Learning</h4>
              <ProgressBar
                className="bar"
                now={66}
                label={"66%"}
                variant="danger"
              />
              <h4>Motivation</h4>
              <ProgressBar
                className="bar"
                now={82}
                label={"82%"}
                variant="danger"
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* banner middle */}
      <Container>
        <Row>
          <Col md={6} className="banner-middle my-auto py-3">
            <h3>
              Harder work to get <br /> smarter work
            </h3>
            <p>
              Students do not learn much just sitting in classes listening to
              teachers, memorizing prepackaged assignments, and spitting out
              answers. They must talk about what they are learning, write
              reflectively about it, relate it to past experiences, and apply it
              to their daily lives. They must make what they learn part of
              themselves.
            </p>
          </Col>
          <Col md={6}>
            <img src={aboutImg} className="img-fluid w-75 mt-4 ms-3" alt="" />
          </Col>
        </Row>
      </Container>
      {/* features */}
      <div className="features">
        <Container>
          <Row>
            <Col className="feature" lg={3} md={2}>
              <i className="fas fa-thumbs-up fa-3x"></i>
              <h3>
                <span className="highlight">01.</span> Self Registration
              </h3>
              <p>
                Online students examine your online course inventory and locate
                the perfect eLearning course for their requirements. Your LMS
                ought to have a self-enlistment or auto-select element, where
                online students can join self-governing.
              </p>
            </Col>
            <Col className="feature" lg={3} md={2}>
              <i className="fas fa-building fa-3x"></i>
              <h3>
                <span className="highlight">02.</span> Brand Integration
              </h3>
              <p>
                It’s basic that your new LMS enables you to redo eLearning
                layouts and has different advantages to pass on your image
                informing. This guarantees coherence, cohesiveness, and
                validity.
              </p>
            </Col>
            <Col className="feature" lg={3} md={2}>
              <i className="fas fa-laptop fa-3x"></i>
              <h3>
                <span className="highlight">03.</span> Learning Tools
              </h3>
              <p>
                Mixed learning apparatuses enable you to oblige diverse adapting
                needs and inclinations. You can offer online students up close
                and personal guidance combined with online, preparing assets to
                improve the advantages.
              </p>
            </Col>
            <Col className="feature" lg={3} md={2}>
              <i className="fas fa-clock fa-3x"></i>
              <h3>
                <span className="highlight">04.</span> Availability Features
              </h3>
              <p>
                On the off chance of planning to offer your eLearning courses to
                online students, you ought to consider availability
                highlights.It’s also quite smart to pick an LMS that provide
                useful online assets to students worldwide.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
