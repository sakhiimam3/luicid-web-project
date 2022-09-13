import React from 'react'
import "../styles/profile.scss"
import { Container, Row, Col, Card } from "react-bootstrap"
import TopImgage from "../assets/sidetop.jpeg"
import ProfileImage from "../assets/profile.png"
const Profile = () => {

    const data = [
        { name: "sakhidad", date: "9/14/2022", description: "lorem ipsum dummy data" },
        { name: "Noor", date: "9/13/2022", description: "lorem ipsum dummy data als, las," },
        { name: "babar", date: "9/12/2022", description: "lorem ipsum noaa llam  alla," },
        { name: "sikander", date: "9/10/2022", description: "lorem babamaa noaa llam  alla," },



    ]

    return (
        <>
            <Container fluid>
                <Row>

                    <Col md={3} sm={12} className="side-bar-column">
                        <div className="side-bar-top">
                            <img src={TopImgage} alt="side-top-img" />
                        </div>
                        <div className="side_profile">
                            <div className="profile_img">
                                <img src={ProfileImage} alt="profile" />
                            </div>
                            <div className='profile_text'>
                                <h6>sakhi@gmail.com</h6>
                                <span className='text-light text-capitalize'>my profile</span>
                            </div>
                            <div className="profile-btns">
                                <button >Events</button>
                                <button >Create Event</button>
                                <button >My Events</button>
                                <button >My Calendar</button>
                                <button >Settings</button>
                                <button >Logout</button>

                            </div>
                        </div>

                    </Col>
                    <Col md={9}>

                        {data.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Card className='mt-5'>
                                        <Card.Header>Name : {item.name} &nbsp; Post on Date :  {item.date}</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </React.Fragment>
                            )
                        })}

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile