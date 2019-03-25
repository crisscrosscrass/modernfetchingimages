import React from 'react'

function Modal(props){
    const styleImage = {
        width: "90%"
      }
    return(
        <div id="modal-container">
          <div className="modal-background" onClick={props.closeModal}>
            <div id="modalcontent" className="modal">
              <h2>I'm a Modal</h2>
              <p>Hear me roar.</p>
              <img src={props.ModalImage} alt="" style={styleImage}/>
            </div>
          </div>
        </div>
    )
}

export default Modal