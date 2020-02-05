import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

function ModalComponent(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState("")
    
  useEffect(() => {
    setIsOpen(props.isOpen);
    onEditModal();
  }, [])

  function onEditModal(){
    if(props.data != undefined){
      setCategory(props.data)
    }
  }

  function closeModal(){      
    setIsOpen(!isOpen)
    props.onClose(false)
  }

  function saveModal(){ 
    props.onSave(category)
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
                    <input type='text' class="form-control" id='categoryName' placeholder='Category name'
                      onChange={event => setCategory({...category, name:event.target.value})} value={category.name}/>
                  </div>   
                </ModalBody>

                <ModalFooter>
                    <button type="button" onClick={() => closeModal()} class="btn btn-danger">Cancel</button>
                    <button type="button" onClick={() => saveModal()} class="btn btn-success">Save</button>
                </ModalFooter>

            </Modal>
        </section>
    </main>
  );
}

export default ModalComponent;