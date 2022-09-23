import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateEvent(props) {
    const [inputField, setInputField] = useState({ email:localStorage.getItem("email"), event: "", description: "",date:'' ,time:"",select:"",city:""})
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




//   input handler function 
  const inputsHandler = (e) => {

    setInputField({
        ...inputField,
        [e.target.name]: e.target.value
    })

}


const   storeEvents=async()=>{
    axios.post("http://localhost:5000/createEvent",inputField)
    .then((res)=>{
       console.log(res ,"evets dtata ")
    })
    .catch((err)=>console.log("somthing went wrong please try again"))
}






const  submitEvents = (e) => {
    e.preventDefault()

    if (inputField.event !== "" && inputField.description !== "" && inputField.time !== ""&& inputField.date !== "" && inputField.select !== "" && inputField.city !== "") {
        
        storeEvents()
        props.setShowEvents(true)
    }
  setInputField({event: "", description: "",date:'' ,time:"",select:"",city:""})
  setShow(false)
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Event  
      </Button>

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
                    <form  onSubmit={submitEvents}>
                        <div className="mb-3">
                            <label className='event-input-label'> Event</label>
                    
                            <br/>
                            <input type="text"
                                 onChange={inputsHandler}
                                value={
                                    inputField?.event
                                }
                          
                                name="event"/>
                          
                        </div>

                        <div className="mb-3">
                            <label className='event-input-label'>Description</label>
                           
                            <br/>
                            <textarea type="text"
                                onChange={inputsHandler}
                                value={
                                    inputField?.description
                                }
                          
                              
                                name="description"/>
                        </div>

                        <div className="mb-3 event-inputs-date-time">
                            <label className='event-input-label'>Date of Event</label>
                       
                            <br/>
                            <input type="text"
                                 onChange={inputsHandler}
                                value={
                                    inputField?.date
                                }
                          
                                name="date"/>
                          
                        </div>
                        <div className="mb-3 event-inputs-date-time">
                            <label className='event-input-label'>Time of Event</label>
                            <br/>
                            <input type="text"
                                 onChange={inputsHandler}
                                value={
                                    inputField?.time
                                }
                          
                                name="time"/>
                          
                        </div>
                        <div className="mb-3">
                            <label className='event-input-label'>City</label>
                       
                            <br/>
                            <input type="text"
                                 onChange={inputsHandler}
                                value={
                                    inputField?.city
                                }
                          
                                name="city"/>
                          
                        </div>  
                        <div className="mb-3">
                            <label className='event-input-label'>Time of Event</label>
                            <label >State</label>
                            <br/>
                            <select value={inputField?.select} onChange={inputsHandler}  name='select' >
                                <option >State</option>
                                <option value="India">India</option>
                                <option value="China">China</option>
                                <option value="Iran">Iran</option>
                                <option value="UAE">UAE</option>
                                <option value="Canada">Canada</option>
                                <option value="Spain">Spain</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Pakistan">Pakistan</option>
                            </select>
                          
                        </div>
                        <div className="mb-3">
                            <div className='d-flex align-items-baseline' >
                            <label className='fs-5'>Image</label>  <input type="file" name="file"/>
                           
                           </div>
                          
                        </div>  



                        <div className='d-flex justify-content-end'>
                            <div>
                                <button  className='btn '
                                    style={
                                        {
                                            backgroundColor: "rgb(74, 52, 21)",
                                            color: "white",
                                            border: "none"
                                        }
                                    }
                                    type="submit">
                                 Submit
                                </button>
                                &nbsp;
                                <button onClick={handleClose} className='btn '
                                    style={
                                        {
                                            backgroundColor: "rgb(74, 52, 21)",
                                            color: "white",
                                            border: "none"
                                        }
                                    }
                                    >
                                    Close 
                                </button>
                            </div>
                            
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
    </>
  );
}
export default CreateEvent