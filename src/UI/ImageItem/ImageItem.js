import React from "react";
import { useState } from "react";
import "./ImageItem.css";
import ImageOverlay from "./ImageOverlay";

const ImageItem = ({ img, alt }) => {
  const [showImage, setShowImage] = useState(false);

  const imageOverlayHandler = () => {
      setShowImage(true);
  }
  
  const hideOverlayHandler = () => {
    setShowImage(false);
  }

  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      setShowImage(false);
    }
  });

  return (
    <>
      {showImage && <ImageOverlay img={img} alt={alt} hideOverlayHandler={hideOverlayHandler} />}
      <div className="imageItem__image">
        <img src={img} alt="cokolwiek" onClick={imageOverlayHandler}/>
      </div>
    </>
  );
};
export default ImageItem;
