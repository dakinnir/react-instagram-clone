import { Modal } from '@mui/material'
import React from 'react'
import { modalCustomStyles } from '../utils/constants';

const ModalComponent = ({modalIsOpen, closeModal}) => {

  let subtitle;

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  };

  return (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalCustomStyles}
        shouldCloseOnOverlayClick={true}
        contentLabel='Example Modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Create new post</h2>
        <form action=''>
          <div className='modal__controls'>
            <input type='text' placeholder='Enter your caption...' name='caption' />
            <label for='upload-photo'>Upload Photo</label>
            <input type='file' name='photo' id='upload-photo' />
            <img src='' alt='No File Selected' />
            <button>Upload Post</button>
          </div>
        </form>
      </Modal>
  )
}

export default ModalComponent