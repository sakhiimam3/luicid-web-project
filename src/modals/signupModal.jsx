import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import "../styles/modal.scss"


const SignUpModal = (props) => {
    const [inputField, setInputField] =useState({
        userName: "",
        password: "",
        email: "",

    })
     
    const [registerInfo, setregisterInfo] = useState({});
    const [showMessage,setShowMessage]=useState(false)
    // modal open states 
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


  

    // inputs handler 

  const signup=async()=>{
         axios.post("http://localhost:5000/register",inputField)
         .then((res)=>{
            setregisterInfo(res.data)
         })
         .catch((err)=>console.log("somthing went wrong please try again"))
  }




    const inputsHandler = (e) => {

        setInputField({...inputField, [e.target.name]: e.target.value })
         
    }

    const submitButton = (e) => {
        e.preventDefault()
        if(inputField.userName !== " " && !inputField.password !== " " && inputField.email  !== " "){
            signup()
            setShowMessage(true)
        }
        else{
              alert("Please fill all inputs ")
        }
      
         setInputField({
            userName: "",
            password: "",
            email: "",
    
        })
        setTimeout(()=>{
            setShow(false)
        },2000)
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
                <Modal.Header closeButton style={{ backgroundColor: 'rgb(98, 144, 114)', color: "white" }}>
                    <Modal.Title> Register an Account   </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'rgb(98, 144, 114)', color: "white", }}>
                    <form onSubmit={submitButton}>
                        <div className="mb-3">
                            <label >User Name</label> <br />
                            <input type="text" name="userName" placeholder='User Name' value={inputField?.userName} onChange={inputsHandler} />

                        </div>
                        <div className="mb-3">
                            <label>Password</label> <br />
                            <input type="password" placeholder='Password' name="password" value={inputField?.password} onChange={inputsHandler} />
                        </div>
                        <div className="mb-3">
                            <label >Email address</label> <br />
                            <input type="email" placeholder='Email' name="email" value={inputField?.email} onChange={inputsHandler} />
                            <div className="text-light">We'll never share your email with anyone else.</div>
                        </div>
                        <hr className='text-light mt-4' />
                        <div className="mb-3">
                            <label>Zip</label> <br />
                            <input type="number" placeholder='Zip Code' />

                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className="err">
                               {showMessage ? `${registerInfo.message }` :''}
                                

                            </div>
                            <div className="btn-register">
                            <button className="btn " style={{ backgroundColor: "rgb(44, 86, 50)", color: "white", border: "none", }} onClick={handleClose} >
                                Close
                            </button>
                            &nbsp;
                            <button type='submit' className="btn " style={{ backgroundColor: "rgb(74, 52, 21)", color: "white", fontWeight: "bold", border: 'none' }}  >
                                Sign Up
                            </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default SignUpModal