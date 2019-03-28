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
      filename: "",
      selectedID: ""
    }
    this.updateImageForrest = this.updateImageForrest.bind(this)
    this.updateImageAlisa = this.updateImageAlisa.bind(this)
    this.updateImageAlice = this.updateImageAlice.bind(this)
    this.updateImageMatoro = this.updateImageMatoro.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removedMouse = this.removedMouse.bind(this)
    this.goToNextImage = this.goToNextImage.bind(this)
    this.goToPreviousImage = this.goToPreviousImage.bind(this)
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
  updateImageForrest(){
    this.updateImageTo(ImageForrestData);
  }
  updateImageJordan(){
    this.updateImageTo(imageJordanData);
  }
  updateImageAlice(){
    this.setState({isLoaded:false})
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
  })}
  updateImageMatoro(){
    this.setState({isLoaded:false})
   // matoro image feed url https://docs.google.com/spreadsheets/d/1k2a7oM5_vORdIHObgVWwY-m2lSzSEBPdVWkT6su-z2g/export?format=csv
   Tabletop.init({
    key: '1k2a7oM5_vORdIHObgVWwY-m2lSzSEBPdVWkT6su-z2g',
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
  })}
  handleClick(id){
    document.getElementById("imageGalleryItem"+id).classList.add('markedItem');
    if ( document.getElementById("modal-container").classList.contains('out') ){
      document.getElementById("modal-container").classList.toggle('out');
    }

    this.state.ImageData.forEach(ItemObject => {
      if(ItemObject.id === id){
        // console.log(ItemObject.imageUrl)
        this.setState({ModalImage:ItemObject.imageUrl,authorUrl:ItemObject.author_url,filename:ItemObject.filename,selectedID: ItemObject.id})
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
  goToNextImage(e){
    for(var i = 0 , len = this.state.ImageData.length ; i < len ; i++){
      if(this.state.ImageData[i].id === e.selectedID){
        // console.log("current id : "+this.state.ImageData[i].id)
        if (i+1 >= this.state.ImageData.length) {
          // console.log("next id : "+this.state.ImageData[0].id)
          this.setState({ModalImage:this.state.ImageData[0].imageUrl,authorUrl:this.state.ImageData[0].author_url,filename:this.state.ImageData[0].filename,selectedID: this.state.ImageData[0].id})
        }else{
          // console.log("next id : "+this.state.ImageData[i+1].id)
           this.setState({ModalImage:this.state.ImageData[i+1].imageUrl,authorUrl:this.state.ImageData[i+1].author_url,filename:this.state.ImageData[i+1].filename,selectedID: this.state.ImageData[i+1].id})
        }
      }
    }
  }
  goToPreviousImage(e){
    for(var i = 0 , len = this.state.ImageData.length ; i < len ; i++){
      if(this.state.ImageData[i].id === e.selectedID){
        if (i-1 < 0 ) {
          // console.log("previous id : "+this.state.ImageData[this.state.ImageData.length-1].id)
          this.setState({ModalImage:this.state.ImageData[this.state.ImageData.length-1].imageUrl,authorUrl:this.state.ImageData[this.state.ImageData.length-1].author_url,filename:this.state.ImageData[this.state.ImageData.length-1].filename,selectedID: this.state.ImageData[this.state.ImageData.length-1].id})
        }else{
          this.setState({ModalImage:this.state.ImageData[i-1].imageUrl,authorUrl:this.state.ImageData[i-1].author_url,filename:this.state.ImageData[i-1].filename,selectedID: this.state.ImageData[i-1].id})
        }
        // console.log("current id : "+this.state.ImageData[i].id)
      }
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
          <Modal goToPreviousImage={this.goToPreviousImage} goToNextImage={this.goToNextImage} closeModal={this.closeModal} ModalImage={this.state.ModalImage} authorUrl={this.state.authorUrl} filename={this.state.filename} selectedID={this.state.selectedID}/>
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