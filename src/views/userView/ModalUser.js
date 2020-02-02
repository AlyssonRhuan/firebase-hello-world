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
                  <div class="form-group">
                    <label for='userName'>Name</label>
                    <input type='text' class="form-control" id='userName' placeholder='User name'
                      onChange={event => setUser({...user, name:event.target.value})} value={user.name}/>
                  </div>   
                  <div class="form-group">
                    <label for='userLogin'>Login</label>
                    <input type='text' class="form-control" id='userLogin' placeholder='User login'
                      onChange={event => setUser({...user, login:event.target.value})} value={user.login}/>
                  </div>   
                  <div class="form-group">
                    <label for='userPass'>Password</label>
                    <input type='password' class="form-control" id='userPass' placeholder='User password'
                      onChange={event => setUser({...user, pass:event.target.value})} value={user.pass}/>
                  </div>   
                </ModalBody>

                <ModalFooter>
                    <button type="button" onClick={() => saveModal()} class="btn btn-success">Save</button>
                    <button type="button" onClick={() => closeModal()} class="btn btn-danger">Cancel</button>
                </ModalFooter>

            </Modal>
        </section>
    </main>
  );
}

export default ModalComponent;
