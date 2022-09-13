import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import "../styles/Navbar.scss"

const Navigation = () => {
    const Navigate = useNavigate()
    return (
        <>
            <Navbar>
                <Container>
                    <Row >
                        <Col>
                            <Nav>
                                <ButtonGroup size="lg" className="mb-2 btn-group">
                                    <Button onClick={() => Navigate("/")}>About Us</Button>
                                    <Button onClick={() => Navigate("/contact")}>Contact</Button>
                                    <Button onClick={() => Navigate("/ourmission")}>Our Mission</Button>
                                    <Button onClick={() => Navigate("/profile")}>My Profile</Button>
                                </ButtonGroup>

                            </Nav>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </>
    )
}

export default Navigation