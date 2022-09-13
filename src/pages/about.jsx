import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className='d-flex justify-content-center align-items-center flex-column text-light ' style={{ height: "50vh" }}>
                <h1>About</h1>
                <p className='text-center'>Hey there! We're a team of five studious software developers studying web development at UNC Chapel Hill.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About