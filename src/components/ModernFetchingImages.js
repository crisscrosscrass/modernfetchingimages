import React, {Component} from 'react'
import ImageForrestData from './data/ForrestData'
import imageAlisaData from './data/AlisaAmoreData'
import imageJordanData from './data/JordanCarversData'
import FetchingImagesContainer from './FetchingImagesContainer'
import Modal from './ModalContainer'
import './hoverImage.css'
import Tabletop from 'tabletop'

class ModernFetchingImages extends Component{
  constructor(){
    super()
    this.state = {
      ImageData : [],
      isLoaded: false,
      ModalImage: "",
      authorUrl: "",
      filename: ""
    }
    this.updateImageForrest = this.updateImageForrest.bind(this)
    this.updateImageAlisa = this.updateImageAlisa.bind(this)
    this.updateImageAlice = this.updateImageAlice.bind(this)
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
  }, 100)
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
  updateImageAlice(){
    this.setState({isLoaded:false})
   // testfeed url 'https://docs.google.com/spreadsheets/d/16xXH9qj5dHhxAruxGFrnvANplpPhQC8CSS0R0NsNgGc/export?format=csv'
   // alice goodwin feed url https://docs.google.com/spreadsheets/d/1YXkSXQR4F1cswvGRS2di9Tux3eXtlHKwQrS-HMPs-Ls/export?format=csv
   Tabletop.init({
    key: '1YXkSXQR4F1cswvGRS2di9Tux3eXtlHKwQrS-HMPs-Ls',
    callback: googleData => {
      // console.log('google sheet data --->', googleData)
      this.setState(prevState => ({ImageData: []}))
      googleData.forEach(ImageObject => {
        this.setState(prevState => ({
          ImageData: [...prevState.ImageData, ImageObject]
        }))
      });
      this.setState({isLoaded:true})
    },
    simpleSheet: true
  })
  
  }
  handleClick(id){
    document.getElementById("imageGalleryItem"+id).classList.add('markedItem');
    if ( document.getElementById("modal-container").classList.contains('out') ){
      document.getElementById("modal-container").classList.toggle('out');
    }

    this.state.ImageData.forEach(ItemObject => {
      if(ItemObject.id === id){
        // console.log(ItemObject.imageUrl)
        this.setState({ModalImage:ItemObject.imageUrl,authorUrl:ItemObject.author_url,filename:ItemObject.filename})
      }
    })
    document.getElementById("modal-container").classList.add('modalWindow');
  }
  removedMouse(id){
    if ( document.getElementById("imageGalleryItem"+id).classList.contains('markedItem') ){
      document.getElementById("imageGalleryItem"+id).classList.toggle('markedItem');
    }
  }
  closeModal(){
    document.getElementById("modalcontent").scrollTop = 0;
    if ( document.getElementById("modal-container").classList.contains('out') ){
      document.getElementById("modal-container").classList.toggle('out');
    }else{
      document.getElementById("modal-container").classList.add('out');
    }
  }

  render(){
    const {isLoaded} = this.state;
    const styleCenter = {
      margin: "0px auto",
      padding: "0px",
      textAlign: "center",
      backgroundColor: "white"
    }

    if(!isLoaded){
      return (
        <div style={styleCenter}>
        <p>Loading..</p>
        <img src="https://i.redd.it/ounq1mw5kdxy.gif" alt=""/>
      </div>
      )
    }else{
      return(
        <div>
          <Modal closeModal={this.closeModal} ModalImage={this.state.ModalImage} authorUrl={this.state.authorUrl} filename={this.state.filename} />
          <Modal />
          <div style={styleCenter}>
          <FetchingImagesContainer state={this.state} handleClick={this.handleClick} removedMouse={this.removedMouse}/>
          
        </div>
        </div>
      )
    }
    
  }
}

export default ModernFetchingImages