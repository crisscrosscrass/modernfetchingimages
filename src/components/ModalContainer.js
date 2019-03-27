import React from 'react'
import './ModalStyling.css'

function Modal(props){
    const styleImage = {
        width: "100%"
    }
    const backgroundClick = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      padding: 50
    }
    return(
        <div id="modal-container">
          <div className="modal-background" >
            <div style={backgroundClick} onClick={props.closeModal}>
            </div>
            <button className="closeButton" onClick={props.closeModal}>Close</button>
            <div className="content">
            <div id="modalcontent" className="modal">
                <h2>{props.filename}</h2>
                <p>{props.authorUrl}</p>
                <img src={props.ModalImage} alt="" style={styleImage}/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Modal