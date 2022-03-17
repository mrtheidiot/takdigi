import React from "react";
import { useState } from "react";
import "./ImageItem.css";
import ImageOverlay from "./ImageOverlay";

const ImageItem = ({ img }) => {
  const [showImage, setShowImage] = useState(null);

    const imageOverlayHandler = () => {
        setShowImage(true);
    }

  return (
    <>
      {showImage && <ImageOverlay img={img} alt='cokolwiek' />}
      <div className="imageItem__image">
        <img src={img} alt="cokolwiek" onClick={imageOverlayHandler}/>
      </div>
    </>
  );
};
export default ImageItem;
