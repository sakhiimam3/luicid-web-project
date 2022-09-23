import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className='d-flex justify-content-center align-items-center flex-column  ' style={{padding: "50px"}}>
                <h1 className='fw-bold'>Contact</h1>
                <p className='text-center text-light'>Contact info coming soon</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact