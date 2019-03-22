import React from 'react'

function FechtingImagesContainer(props){
    const DivStyle = { width: 200, height: 200, position: 'relative', overflow: 'hidden', float: 'left', padding: 5 , margin: 5 }
    const StyleBreakPoint = {clear: 'both'}
    const ImageGallery = props.state.ImageData.map( Item => <div style={DivStyle} key={Item.id} ><a href={Item.imageUrl} rel="noopener noreferrer" target="_blank"><img src={Item.imageUrl} alt="" className="imageGallery" /></a> </div>)
      return(
        <div className="">
            {ImageGallery}
            <h6 style={StyleBreakPoint}> </h6>
        </div>
      )
}

export default FechtingImagesContainer