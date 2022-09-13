import React, { useState } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import BackgroundImage from "../assets/back.jpg"
import Logo from "../assets/logo.png"
import "../styles/home.scss"
import LoginModal from "../modals/loginModal"
import SignUpModal from '../modals/signupModal'
import Navigation from '../components/Navbar'
import NavRouter from '../utils/config/Route'
const Home = () => {
  const [show, setShow] = useState(false)

  const loginPopup = () => {
    setShow(true)
  }

  return (
    <>

      <section className='Home'>
        <div className="back-img">
          <img className='backImage' src={BackgroundImage} alt="background-img" />
        </div>
        <Container>
          <Row>
            <Col sm={12} lg={12} md={12} xl={9} className="mx-auto" >
              <div className="home-main-back">
                <div className="home-header d-flex justify-content-center flex-column">
                  <div className="header-content">
                    <div className="logo-div my-5 mx-auto ">
                      <img className='img-fluid' src={Logo} alt="logo" />
                    </div>

                    <div className="header-text-box d-flex justify-content-center ">
                      <Col sm={12} lg={9} xl={9} className="my-4">
                        <h1 className='text-center'>sapient</h1>
                        <p className='header-p-text'>Globally scoped, locally focused. <br /> Because compassion is in our DNA.</p>
                      </Col>
                    </div>
                    {/* register buttons  */}
                    <div className="register-buttons my-4 d-flex justify-content-center gap-3">
                      <LoginModal />
                      <SignUpModal />

                    </div>



                  </div>


                </div>
                {/* Navbar section  */}
                <div className='d-flex justify-content-center' style={{ backgroundColor: "#514f4d" }}>
                  <Navigation />
                </div>

                {/* main section   start */}
                <main className="main ">
                  <Container>
                    <Row>
                      <Col md={9} lg={12}>
                        <NavRouter />
                      </Col>
                    </Row>
                  </Container>

                </main>


                {/* main section end  */}


              </div>

            </Col>
          </Row>
        </Container>
        <footer style={{ background: "grey", width: '100%', height: '50vh' }} >

        </footer>
      </section>


    </>
  )
}

export default Home