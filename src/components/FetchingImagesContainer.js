import React from 'react'

function FechtingImagesContainer(props){
    const DivStyle = { width: 200, height: 200, position: 'relative', overflow: 'hidden', float: 'left', padding: 5 , margin: 5 }
    const StyleBreakPoint = {clear: 'both'}
    const ImageGallery = props.state.ImageData.map( Item => 
    <div style={DivStyle} key={Item.id} id={"imageGalleryItem"+Item.id} >
      <img src={Item.imageUrl} alt=""  className={"imageGalleryItem " + Item.id} onClick={() => props.handleClick(Item.id)} onMouseLeave={() => props.removedMouse(Item.id)} />
    </div>)
      return(
        <div className="">
            {ImageGallery}
            <h6 style={StyleBreakPoint}> </h6>
        </div>
      )
}

export default FechtingImagesContainer