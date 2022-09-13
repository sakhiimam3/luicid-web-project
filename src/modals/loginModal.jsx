import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/modal.scss"
const LoginModal = (props) => {
    const [inputField, setInputField] = useState({
        email: "",
        password: ""

    })

    // modal open states 
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // inputs handler 
    const inputsHandler = (e) => {

        setInputField({ [e.target.name]: e.target.value })

    }
    console.log(inputField)

    const submitLogin = (e) => {
        e.preventDefault()
        console.log(inputField.userName)

    }
    return (
        <>
            <button className="login_btn" onClick={handleShow}>
                login
            </button>
            <style>{"\
        .modal-content{\
          background:none;\
        }\
      "}

            </style>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton style={{ backgroundColor: 'rgb(110 92 63)', color: "white" }}>
                    <Modal.Title>Login </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'rgb(110 92 63)', color: "white", }}>
                    <form onSubmit={submitLogin}>
                        <div className="mb-3">
                            <label >Email address</label> <br />
                            <input type="email" onChange={inputsHandler} value={inputField.email} placeholder='Email' name="email" />
                            <div className="text-light">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label>Password</label> <br />
                            <input type="password" onChange={inputsHandler} value={inputField.password} placeholder='Password' name="password" />
                        </div>
                        <button className='btn btn-lg' style={{ backgroundColor: "rgb(74, 52, 21)", color: "white", border: "none" }} type="submit">
                            Login
                        </button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default LoginModal