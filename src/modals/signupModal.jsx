import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/modal.scss"


const SignUpModal = () => {
    const [inputField, setInputField] = useState({
        userName: "",
        email: "",
        password: ""

    })
    const { userName, email, password } = inputField
    // modal open states 
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // inputs handler 
    const inputsHandler = (e) => {

        setInputField({ [e.target.name]: e.target.value })

    }
    console.log(inputField)

    const submitButton = (e) => {
        e.preventDefault()
        console.log(inputField.userName)

    }

    return (
        <>
            <button className="signUp_btn" onClick={handleShow}>
                Sign Up
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
                style={{ opacity: "10px" }}

            >
                <Modal.Header closeButton style={{ backgroundColor: 'rgb(110 92 63)', color: "white" }}>
                    <Modal.Title> Register an Account  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'rgb(110 92 63)', color: "white", }}>
                    <form onSubmit={submitButton}>
                        <div className="mb-3">
                            <label >User Name</label> <br />
                            <input type="text" name="userName" placeholder='User Name' value={userName} onChange={inputsHandler} />

                        </div>
                        <div className="mb-3">
                            <label>Password</label> <br />
                            <input type="password" placeholder='Password' name="password" value={password} onChange={inputsHandler} />
                        </div>
                        <div className="mb-3">
                            <label >Email address</label> <br />
                            <input type="email" placeholder='Email' name="email" value={email} onChange={inputsHandler} />
                            <div className="text-light">We'll never share your email with anyone else.</div>
                        </div>
                        <hr className='text-light mt-4' />
                        <div className="mb-3">
                            <label>Zip</label> <br />
                            <input type="number" placeholder='Zip Code' />

                        </div>



                        <div className='d-flex justify-content-end'>
                            <button className="btn btn-lg" style={{ backgroundColor: "rgb(74, 52, 21)", color: "white", border: "none", }} onClick={handleClose} >
                                Close
                            </button>
                            &nbsp;
                            <button type='submit' className="btn btn-lg" style={{ backgroundColor: " rgb(114 74 9)", color: "white", fontWeight: "bold", border: 'none' }}  >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default SignUpModal