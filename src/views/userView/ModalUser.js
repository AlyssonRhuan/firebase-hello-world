import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

function ModalComponent(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState("")
    
  useEffect(() => {
    setIsOpen(props.isOpen);
    onEditModal();
  }, [])

  function onEditModal(){
    if(props.data != undefined){
      setUser(props.data)
    }
  }

  function closeModal(){      
    setIsOpen(!isOpen)
    props.onClose(false)
  }

  function saveModal(){ 
    props.onSave(user)
    closeModal()
  }

  return (
    <main>
        <section>
            <Modal isOpen={isOpen}>

                <ModalHeader>
                    {props.title}
                </ModalHeader>
                
                <ModalBody>
                  <div className="form-group">
                    <label for='userName'>Name</label>
                    <input type='text' className="form-control" id='userName' placeholder='User name'
                      onChange={event => setUser({...user, name:event.target.value})} value={user.name}/>
                  </div>   
                  <div className="form-group">
                    <label for='userLogin'>Login</label>
                    <input type='text' className="form-control" id='userLogin' placeholder='User login'
                      onChange={event => setUser({...user, login:event.target.value})} value={user.login}/>
                  </div>   
                  <div className="form-group">
                    <label for='userPass'>Password</label>
                    <input type='password' className="form-control" id='userPass' placeholder='User password'
                      onChange={event => setUser({...user, pass:event.target.value})} value={user.pass}/>
                  </div>   
                </ModalBody>

                <ModalFooter>
                    <button type="button" onClick={() => closeModal()} className="btn btn-danger">Cancel</button>
                    <button type="button" onClick={() => saveModal()} className="btn btn-success">Save</button>
                </ModalFooter>

            </Modal>
        </section>
    </main>
  );
}

export default ModalComponent;