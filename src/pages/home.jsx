import React, {useState, useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import BackgroundImage from "../assets/back.jpg";
import Logo from "../assets/logo.png";
import "../styles/home.scss";
import LoginModal from "../modals/loginModal";
import SignUpModal from '../modals/signupModal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../components/footer";
import axios from 'axios';
import About from './about';
import Contact from './contact';
import Ourmission from './Ourmission';
import {useNavigate} from 'react-router-dom';


const Home = (props) => {
    const [LoginUser, setLoginUser] = useState("")
    const [isLoggin, setIsLogin] = useState(false)


    let token = localStorage.getItem("token")
    const Navigate = useNavigate()
   
    const getData = () => {
        axios.post("http://localhost:5000/UserData", {token}).then((res) => {
            setLoginUser(res.data.data.userName)
            setIsLogin(true)

        }).catch((err) => console.log("somthing went wrong please try again"))
    }

    useEffect(() => {

        getData()


    }, [isLoggin])

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setIsLogin(false);


    };

    // send data
    // props.getLogin(isLoggin)
    const handleTabChange = (k) => {
     
        if (k == "Profile") {
            Navigate("/profile")
        }
    }



    return (
        <>


            <section className={`home`}>
                <div className="back-img">
                    <img className='backImage'
                        src={BackgroundImage}
                        alt="background-img"/>
                </div>

                <Container>
                    <Row>
                        <Col sm={12}
                            lg={12}
                            md={12}
                            xl={9}
                            className="mx-auto">
                            <div className="home-main-back">
                                <div className="home-header d-flex justify-content-center flex-column">
                                    <div className="header-content">
                                        <div className="logo-div my-5 mx-auto ">
                                            <img className='img-fluid'
                                                src={Logo}
                                                alt="logo"/>
                                        </div>

                                        <div className="header-text-box d-flex justify-content-center ">
                                            <Col sm={12}
                                                lg={9}
                                                xl={9}
                                                className="my-4">
                                                <h1 className='text-center'>sapient</h1>
                                                <p className='header-p-text'>Globally scoped, locally focused.
                                                    <br/>
                                                    Because compassion is in our
                                                    <br/>
                                                    DNA.</p>
                                                <h3> {
                                                    isLoggin ? `Welcome   ${LoginUser}` : ""
                                                }</h3>


                                            </Col>
                                        </div>
                                        {/* register buttons  */}
                                        <div className="register-buttons my-4 d-flex justify-content-center gap-3">
                                            {
                                            isLoggin ? <button className="logout"
                                                onClick={logout}>Logout</button> : <LoginModal setIsLogin={setIsLogin}
                                                isLoggin={isLoggin}
                                                isLogin={isLoggin}/>
                                        }
                                            <SignUpModal/>


                                        </div>


                                    </div>


                                </div>


                                {/* Navbar section  */}
                                {/* <div className='d-flex justify-content-center nav-bar-item'>
                                    <Navigation isLoggin={isLoggin}/>
                                </div> */}

                                {/* main section   start */}
                                <Tabs defaultActiveKey="About"
                                    transition={false}
                                    id="noanim-tab-example"
                                    onSelect={
                                        (k) => handleTabChange(k)
                                    }
                                    className="mb-3 d-flex justify-content-center">
                                    <Tab  eventKey="About" title="About">
                                        <About/>
                                    </Tab>
                                    <Tab eventKey="Contact" title="Contact">
                                        <Contact/>
                                    </Tab>
                                    <Tab eventKey="Ourmission" title="Our Mission">
                                        <Ourmission/>

                                    </Tab>

                                    {
                                    isLoggin ? <Tab eventKey="Profile" title="Profile"/> : ""
                                } </Tabs>
                                {/* <main className="main">
                                    <Container>
                                        <Row className='justify-content-center'>
                                            <Col md={9}
                                                lg={12}
                                                xl={12}>
                                                <NavRouter isLoggin={isLoggin}/> </Col>
                                        </Row>
                                    </Container>

                                </main> */}


                                {/* main section end  */} </div>

                        </Col>
                    </Row>
                </Container>
                <footer>
                    <Footer/>
                </footer>
            </section>


        </>
    )
}

export default Home
