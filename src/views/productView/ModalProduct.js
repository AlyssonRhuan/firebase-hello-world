import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

function ModalComponent(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState("")
    
  useEffect(() => {
    setIsOpen(props.isOpen);
    onEditModal();
  }, [])

  function onEditModal(){
    if(props.data != undefined){
      setProduct(props.data)
    }
  }

  function closeModal(){      
    setIsOpen(!isOpen)
    props.onClose(false)
  }

  function saveModal(){ 
    props.onSave(product)
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
                    <label for='productName'>Name</label>
                    <input type='text' class="form-control" id='productName' placeholder='Product name'
                      onChange={event => setProduct({...product, name:event.target.value})} value={product.name}/>
                  </div>   
                  <div class="form-group">
                    <label for='productCategory'>Category</label>
                    <input type='text' class="form-control" id='productCategory' placeholder='Category'
                      onChange={event => setProduct({...product, category:event.target.value})} value={product.category}/>
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
