import React, {Component} from 'react'
import ImageForrestData from './data/ForrestData'
import imageAlisaData from './data/AlisaAmoreData'
import imageJordanData from './data/JordanCarversData'
import FetchingImagesContainer from './FetchingImagesContainer'
import Modal from './ModalContainer'
import './hoverImage.css'

class ModernFetchingImages extends Component{
  constructor(){
    super()
    this.state = {
      ImageData : [],
      isLoaded: false,
      ModalImage: ""
    }
    this.updateImageForrest = this.updateImageForrest.bind(this)
    this.updateImageAlisa = this.updateImageAlisa.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removedMouse = this.removedMouse.bind(this)
  }
  componentDidMount() {
    this.updateImageTo(ImageForrestData);
  }

  updateImageTo(imageObjectData){
    this.setState({isLoaded:false})
    this.setState(prevState => ({ImageData: []}))
    imageObjectData.forEach(ImageObject => {
      this.setState(prevState => ({
        ImageData: [...prevState.ImageData, ImageObject]
      }))
    });
    setTimeout(() =>{
      this.setState({isLoaded:true})
  }, 600)
  }
  updateImageAlisa(){
    this.updateImageTo(imageAlisaData);
  }
  /* oudated functions stays here if i need to come back
  updateImageAlisa(){
    this.setState({isLoaded:false})
    this.setState(prevState => ({
      ImageData: []
    }))
    imageAlisaData.forEach(Item => {
      this.setState(prevState => ({
        // ImageData: prevState.ImageData.concat(imageAlisaData[0]) OLD NEW BELOW
        ImageData: [...prevState.ImageData, Item]
      }))
    });   
    this.setState({isLoaded:true})
  }
  */
  updateImageForrest(){
    this.updateImageTo(ImageForrestData);
  }
  updateImageJordan(){
    this.updateImageTo(imageJordanData);
  }
  handleClick(id){
    console.log("You entered on ID: "+id)
    document.getElementById("imageGalleryItem"+id).classList.add('markedItem');
    if ( document.getElementById("modal-container").classList.contains('out') ){
      document.getElementById("modal-container").classList.toggle('out');
    }

    this.state.ImageData.forEach(ItemObject => {
      if(ItemObject.id === id){
        // console.log(ItemObject.imageUrl)
        this.setState({ModalImage:ItemObject.imageUrl})
      }
    })
    document.getElementById("modal-container").classList.add('one');
  }
  removedMouse(id){
    if ( document.getElementById("imageGalleryItem"+id).classList.contains('markedItem') ){
      document.getElementById("imageGalleryItem"+id).classList.toggle('markedItem');
    }
  }
  closeModal(){
    var elmnt = document.getElementById("modalcontent");
    elmnt.scrollTop = 0;
    if ( document.getElementById("modal-container").classList.contains('out') ){
      document.getElementById("modal-container").classList.toggle('out');
    }else{
      document.getElementById("modal-container").classList.add('out');
    }
  }

  render(){
    const {isLoaded} = this.state;

    if(!isLoaded){
      return (
        <div className="centerDiv">
        <p>Loading..</p>
        <img src="https://i.redd.it/ounq1mw5kdxy.gif" alt="" />
      </div>
      )
    }else{
      return(
        <div className="centerDiv">
        <Modal closeModal={this.closeModal} ModalImage={this.state.ModalImage} />
        <div className="content">
          <h1>Modal Animations</h1>
        </div>
          <FetchingImagesContainer state={this.state} handleClick={this.handleClick} removedMouse={this.removedMouse}/>
        </div>
      )
    }
    
  }
}

export default ModernFetchingImages