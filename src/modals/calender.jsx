import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import "../styles/calenderModal.scss"
const Calender = () => {

    const localizer = momentLocalizer(moment)
    const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const events = [
      {
        id: 0,
        title: 'Meeting',
        start: moment({ hours: 8 }).toDate(),
        end: moment({ hours: 10 }).toDate(),
      },
      {
        id: 1,
        title: 'Lunch',
        start: moment({ hours: 12 }).toDate(),
        end: moment({ hours: 13 }).toDate()
      },
      {
        id: 2,
        title: 'Coding',
        start: moment({ hours: 14 }).toDate(),
        end: moment({ hours: 17 }).toDate(),
      },
    ];


  return (
    <>


  <Button variant="primary" onClick={handleShow}>
       My calender
      </Button>

      <Modal  style={{padding:'100px 10px'}}  dialogClassName="my-modal"   show={show} onHide={handleClose}>
        <Modal.Header  closeButton className='modal-header'>
          <Modal.Title>My Calender</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500}}
    />
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Calender