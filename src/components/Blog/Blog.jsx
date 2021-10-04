import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Blog.css"
import aboutImg from "./img/blog.jpg"
import author from "./img/author.jpeg"

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="banner">
        <Container>
          <h2>Blog</h2>
        </Container>
      </div>
      <Container>
        <Row className="my-5 blog-container">
          <Col lg={9}>
            {/* image */}
            <img src={aboutImg} alt="" className="img-fluid mb-4" />
            {/* article */}
            <p>
              <span>Business</span> / <span>June 25, 2018</span>
            </p>
            <h2>Live online lessons & eLearning</h2>
            <article>
              <p>
                Online learning has made education more accessible to students
                around the world. Students who live in rural Georgia can attend
                classes in Los Angeles. Students with day jobs can log in to
                complete their school work in the evenings. The value of online
                learning has come to light in some tough situations, such as the
                COVID-19 outbreak and other natural disasters that force
                campuses to close down.
              </p>
              <blockquote>
                <i className="fas fa-quote-left"></i>
                <h3>
                  Online learning is rapidly becoming one of the most
                  cost-effective ways to educate the world’s rapidly expanding
                  workforce.
                </h3>
              </blockquote>
              <p>
                E-Learning, also known as Home-Based Learning is to learn from
                home with the aid of an online portal that students have access
                to. Example – Blackboard Students have to log into their
                respective accounts and complete any work that is due for the
                day or week. E-Learning usually contains materials for students
                to go through themselves, therefore it is very independent.
                These materials are either soft copy materials (eg.
                worksheets/lecture notes/PowerPoint slides.) or/and video
                explanation of the lecture/class. It would be followed by a
                series of quizzes, tests, homework and assignments.
              </p>
              <p>
                As the word ‘online’ suggests, live online learning happens just
                like normal learning but entirely online. Lessons are conducted
                at the comfort of the student’s homes, except the student will
                not be alone. Lessons are taught live by an experienced
                individual/tutor/teacher. Live online lessons require both
                students and tutors/teachers to be online during the same time
                as lessons are conducted real-time. Both students and
                tutors/teachers will communicate with each other on the same
                platform via audio, video or/and an interactive whiteboard. It
                is also a misconception that Live Online Learning is the same as
                learning through Skype or other real time communication
                platforms like zoom or google meet.
              </p>
              <p>
                E-Learning usually contains soft copy materials such as
                PowerPoint slides and/or Word Documents and/or pre-recorded
                video lectures. Students have to sit through a huge chunk of
                information by themselves. Powerpoint slides usually contain
                explanations of theory in words. Video lectures are pre-recorded
                by teachers and it usually shows them going through PowerPoint
                slides while talking or just simply lecturing. These materials
                are hardly interactive for students to think and learn at the
                same time. The normal attention span of a healthy teenager only
                lasts for 20 to 48 minutes. Attention span can vary due to some
                factors such as how interested they are, how tired, hungry and
                what kind of distraction are around them.
              </p>
              <p>
                This also depends on the type of learners they are at nature.
                Some students learn best when they can visually see the
                information whereas some learn better with somebody guiding
                them. Students basically learn by themselves with the aid of
                these videos and online notes. The only physical thing they have
                is their textbook and workbook. Should they have any questions
                and doubts, they have to post it on their online forum or email
                their teachers to have their queries answered.
              </p>
            </article>
            {/* author */}
            <div>
              <div className="author-details d-flex">
                <div md={4}>
                  <img src={author} alt="" />
                </div>
                <div md={8} className="my-auto px-3">
                  <h4 className="name">Mark Hook</h4>
                  <p className="description">
                    A dynamic and creative senior front-end web producer, with
                    over 20 years’ experience of managing successful IT projects
                    and developing websites for leading arts and HE
                    organisations. A passion for creating user focussed
                    experiences on the web and delivering responsive designs.
                  </p>
                  <span>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <aside className="side-content">
              <div className="form">
                <h3>Apply Now</h3>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tell" placeholder="Phone" />
                <button className="main-btn">Get it now</button>
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
