import React, {useState,useEffect} from 'react'
import "../styles/profile.scss"
import {Container, Row, Col, Card} from "react-bootstrap"
import TopImgage from "../assets/sidetop.jpeg"
import ProfileImage from "../assets/profile.png"
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import Calender from '../modals/calender'
import CreateEvent from '../modals/createEvent'
const Profile = () => {
    const [profileData, setProfileData] = useState({})
    const [eventsData,setEventsData]=useState([])
    const [islogin,setIslogin]=useState(false)
    const [ShowEvents,setShowEvents]=useState(false)

   
    const Navigate = useNavigate()
    const data = [
        {
            name: "sakhidad",
            date: "9/14/2022",
            description: "lorem ipsum dummy data"
        }, {
            name: "Noor",
            date: "9/13/2022",
            description: "lorem ipsum dummy data als, las,"
        }, {
            name: "babar",
            date: "9/12/2022",
            description: "lorem ipsum noaa llam  alla,"
        }, {
            name: "sikander",
            date: "9/10/2022",
            description: "lorem babamaa noaa llam  alla,"
        },


    ]
 

 const token=localStorage.getItem('token')

    const getProfileData = async () => {
       try {
        const data= await axios.post("http://localhost:5000/UserData",{token})
        setProfileData(data.data)
     
       } catch (error) {
          console.log(error)
       }

}

// get events from backend 
const email=localStorage.getItem("email")
const getEventsData = async () => {
    try {
     const data= await axios.post("http://localhost:5000/getEventData",{email})
     setEventsData(data.data)
    } catch (error) {
       console.log(error)
    }

}


    useEffect(() => {
        getProfileData()
        getEventsData()
    }, [ShowEvents])

    // logout function
    const logout = () => {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          if(!islogin){
              Navigate("/")
          }
    };

     

    return (
        <>
            <Container fluid  className='profile'>
                <Row>

                    <Col md={2}
                        sm={12}
                        className="side-bar-column">
                        <div className="side-bar-top">
                            <img src={TopImgage}
                                alt="side-top-img"/>
                        </div>
                        <div className="side_profile">
                            <div className="profile_img">
                                <img src={ProfileImage}
                                    alt="profile"/>
                            </div>
                            <div className='profile_text'>
                                <h6>{profileData.data?.email}</h6>
                                <span className='text-light text-capitalize'>Name :{profileData.data?.userName}</span>
                            </div>
                            <div className="profile-btns">
                                <button onClick={()=>alert("comming soon !")}>Events</button>
                                 <CreateEvent setShowEvents={setShowEvents} />
                                <button onClick={()=>alert("comming soon !")}>My Events</button>
                                {/* <button>My Calendar</button> */}
                                <Calender />
                                <button onClick={()=>alert("comming soon !")}>Settings</button>
                                <button onClick={logout}>Logout</button>

                            </div>
                        </div>

                    </Col>
                    <Col md={10} className="event-lists">

                        {
                        eventsData.data?.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Card className='mt-3'>
                                        <Card.Header className='card-header'>
                                     
                                        <span className='text-start ' style={{color:"rgb(252, 254, 179)"}}>
                                        Post on Date : {
                                            item.date
                                        } 
                                        &nbsp;  
                                        by :
                                        </span> 
                                        &nbsp;  
                                          <span className='text-capitalize' style={{ color:"rgb(178, 205, 255)"}}>{
                                           ` ${profileData.data?.userName}`
                                        }
                                        </span>
                                        
                                           
                                          </Card.Header>
                                        <Card.Body >
                                        <Card.Text className='text-start'> Event : {
                                                item.event
                                            } </Card.Text>
                                            <Card.Text className='text-start'> Description : {
                                                item.description
                                            } </Card.Text>
                                              <button className='visit-btn' onClick={()=>Navigate(`/profile/userDeatl/${index}`)}>Visit</button>
                                        </Card.Body>
                                    </Card>
                                </React.Fragment>
                            )
                        })
  }  </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
