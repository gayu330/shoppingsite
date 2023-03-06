import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { update } from '../profile/profilelogic';
import{useDispatch} from 'react-redux'
function Updateaddress() {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[updateaddress,SetupdateAddress]=useState({
    houseno:"",
        city:"",
        pincode:""
  })
 
const dispatch=useDispatch()
function updated(){
    dispatch(update({id:updateaddress.houseno,hosuseno:updateaddress.houseno,city:updateaddress.city,pincode:updateaddress.pincode}))
    handleClose()
}
  function Updateaddress(e){
    let a={}
    a[e.target.name]=e.target.value
    SetupdateAddress({...updateaddress,...a})
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <p>HOUSENO</p>
            <input type="text"  name="Houseno"  onChange={Updateaddress}/>
            <p>CITY</p>
            <input type="text" name="city" onChange={Updateaddress} />
            <p>PINCODE</p>
            <input type="text" name="pincode" onChange={Updateaddress} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updated}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Updateaddress