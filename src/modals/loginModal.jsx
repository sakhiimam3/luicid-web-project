import React, {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "../styles/modal.scss"
import { useNavigate } from 'react-router-dom';
const LoginModal = (props) => {
    const [usermessage, setUserMessage] = useState("")
    const [inputField, setInputField] = useState({email: "", password: ""})
    const [routeto,setRoutTo]=useState(false)
    const Navigate=useNavigate()
    // modal open states
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // inputs handler
    const inputsHandler = (e) => {

        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })

    }


    const Login = async () => {
        axios.post("http://localhost:5000/Login", inputField).then((res) => {
            window.localStorage.setItem("token", res.data.data.token)
            window.localStorage.setItem("email", res.data.data.email)
            setUserMessage(res.data.message)
            setRoutTo(true)
             
          
            setTimeout(() => {
                props.setIsLogin(true)
               
              
            }, 2000)


        }).catch((err) => console.log("somthing went wrong please try again"))
    }


    const submitLogin = (e) => {
        e.preventDefault()

        if (inputField.email !== "" && inputField.password !== "") {
            Login()

        }

        setInputField({email: "", password: ""})
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }
    return (
        <>
            <button className="login_btn"
                onClick={handleShow}>
                login
            </button>
            <style>
                {"\
        .modal-content{\
          background:none;\
        }\
      "}
            </style>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton
                    style={
                        {
                            backgroundColor: 'rgb(98, 144, 114)',
                            color: "white"
                        }
                }>
                    <Modal.Title>Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={
                    {
                        backgroundColor: 'rgb(98, 144, 114)',
                        color: "white"
                    }
                }>
                    <form onSubmit={submitLogin}>
                        <div className="mb-3">
                            <label>Email address</label>
                            <br/>
                            <input type="email"
                                onChange={inputsHandler}
                                value={
                                    inputField ?. email
                                }
                                placeholder='Email'
                                name="email"/>
                            <div className="text-light">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <br/>
                            <input type="password"
                                onChange={inputsHandler}
                                value={
                                    inputField ?. password
                                }
                                placeholder='Password'
                                name="password"/>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <button className='btn '
                                    style={
                                        {
                                            backgroundColor: "rgb(74, 52, 21)",
                                            color: "white",
                                            border: "none"
                                        }
                                    }
                                    type="submit">
                                    Login
                                </button>
                            </div>
                            <div>
                                <span className='err'>
                                    {usermessage}</span>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default LoginModal
