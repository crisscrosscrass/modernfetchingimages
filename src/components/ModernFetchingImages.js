import React, {Component} from 'react'
import ImageForrestData from './data/ForrestData'
import imageAlisaData from './data/AlisaAmoreData'
import imageJordanData from './data/JordanCarversData'
import FetchingImagesContainer from './FetchingImagesContainer'
import './hoverImage.css'

class ModernFetchingImages extends Component{
  constructor(){
    super()
    this.state = {
      ImageData : [],
      isLoaded: false
    }
    this.updateImageForrest = this.updateImageForrest.bind(this)
    this.updateImageAlisa = this.updateImageAlisa.bind(this)
  }
  componentDidMount() {
    this.setState({isLoaded:false})
    this.updateImageForrest();
    this.setState({isLoaded:true})
  }

  updateImageTo(imageObjectData){
    this.setState({isLoaded:false})
    this.setState(prevState => ({ImageData: []}))
    imageObjectData.forEach(ImageObject => {
      this.setState(prevState => ({
        ImageData: [...prevState.ImageData, ImageObject]
      }))
    });   
    this.setState({isLoaded:true})
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

  render(){
    const {isLoaded} = this.state;

    if(!isLoaded){
      return (
        <div>
        <p>Loading..</p>
        <img src="https://i.redd.it/ounq1mw5kdxy.gif" alt="" />
      </div>
      )
    }else{
      return(
        <div className="centerDiv">
            <FetchingImagesContainer state={this.state}/>
        </div>
      )
    }
    
  }
}

export default ModernFetchingImages