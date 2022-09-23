import React  from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar, Row, Col,} from 'react-bootstrap'
import "../styles/Navbar.scss"

const Navigation = (props) => {
    const Navigate=useNavigate()
    const {isLoggin}=props

    


    return (
        <>
            <Navbar className='menu-bar navbar-fixed-top' >
                <Container>
                    <Row >
                        <Col>
                            <Nav className='nav'>
                                
                                    <NavLink to="/"    className={(navData) => (navData.isActive ? "activeButton" : 'nav-btn')}>  About Us  </NavLink>
                                    <NavLink to="/contact"  className={(navData) => (navData.isActive ? "activeButton" : 'nav-btn')}>  Contact </NavLink>
                                    <NavLink to="/ourmission"  className={(navData) => (navData.isActive ? "activeButton" : 'nav-btn')}> Our mission   </NavLink>
                                     {isLoggin ?   <NavLink   to="/profile"      className={(navData) => (navData.isActive ? "activeButton" : 'nav-btn')}>  Profile   </NavLink> : ""}
                            </Nav>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </>
    )
}

export default Navigation