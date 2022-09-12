import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BackgroundImage from "../assets/back.jpg"
import Logo from "../assets/logo.png"
import "../styles/home.scss"
import LoginModal from "../modals/loginModal"
const Home = () => {
  const [show, setShow] = useState(false)

  const LoginPopup = () => {
    setShow(true)
  }

  const LoginClose = () => {
    setShow(false)
  }
  return (
    <>

      <section className='Home'>
        <div className="back-img">
          <img className='backImage' src={BackgroundImage} alt="background-img" />
        </div>
        <Container>
          <Row>
            <Col sm={12} lg={9} xl={9} className="mx-auto">
              <div className="home-main-back ">
                <div className="home-header d-flex justify-content-center">
                  <div className="header-content">
                    <div className="logo-div my-5 mx-auto ">
                      <img className='img-fluid' src={Logo} alt="logo" />
                    </div>

                    <div className="header-text-box d-flex justify-content-center">
                      <Col sm={12} lg={9} xl={9} className="my-4">
                        <h1 className='text-center'>sapient</h1>
                        <p className='header-p-text'>Globally scoped, locally focused. Because compassion is in our DNA.</p>
                      </Col>
                    </div>
                    {/* register buttons  */}
                    <div className="register-buttons my-3 d-flex justify-content-center gap-3">
                      <button className='login_btn'>login</button>
                      <button className='signUp_btn'>signp up</button>
                    </div>
                    <LoginModal show={show} setShow={setShow} />
                  </div>
                </div>


              </div>
            </Col>
          </Row>
        </Container>

      </section>


    </>
  )
}

export default Home