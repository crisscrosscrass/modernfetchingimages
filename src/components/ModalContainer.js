import React from 'react'
import './ModalStyling.css'

function Modal(props){
    const styleImage = {
        width: props.ImageWidth
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
    /*

    test getting image size ? or test setting size based on provided data

    var img = new Image();
    img.onload = function() {
      console.log(this.width + 'x' + this.height);
    }
    img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';

    */
    return(
        <div id="modal-container">
          <div className="modal-background" >
            <div style={backgroundClick} onClick={props.closeModal}>
            </div>
            <button className="closeButton" onClick={props.closeModal}>Close</button>
            <button className="arrowRightButton" onClick={ () => props.goToNextImage(props)}>	&gt;</button>
            <button className="arrowLeftButton" onClick={ () => props.goToPreviousImage(props)}>&lt;</button>
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