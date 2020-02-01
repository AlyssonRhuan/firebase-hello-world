import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import IconsUtils from '../utils/IconsUtils'

function ModalComponent(props) {
    const [isOpen, setIsOpen] = useState(false)
    
  useEffect(() => {
    setIsOpen(props.isOpen)
  }, [])

  function closeModal(){      
    setIsOpen(!isOpen)
  }

  return (
    <main>
        <section>
            <Modal isOpen={isOpen}>
                <ModalHeader>
                    {props.title}
                </ModalHeader>
                <ModalBody>
                    Body
                </ModalBody>
                <ModalFooter>
                    <button type="button" onClick={() => closeModal()} class="btn btn-danger">Cancel</button>
                </ModalFooter>
            </Modal>
        </section>
    </main>
  );
}

export default ModalComponent;
