import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../styles/ourmission.scss"
const Ourmission = () => {
 
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className='d-flex justify-content-center align-items-center flex-column' style={{padding: "50px"}}>
              <h2 className='text-dark fw-bold'>Our Mission</h2>
              <p className='text-center text-light'>Progress starts from the ground up, and that means  everything that happens in your  neighborhood <span className='center-text'>matters</span> <br /> However, we recognize that it's not always easy finding ways to help out and contribute to your community.</p>
              <p className='text-center text-light'>Our mission is to make this opportunity accessible to everyone by providing the free and valuable resources needed to organize any successful project </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Ourmission