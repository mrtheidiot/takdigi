import React, { useState } from "react";
import classes from "./Gallery.module.css";
import GalleryOverlay from "./GalleryOverlay";

const Gallery = (props) => {
  const gallery = [...props.imgs]
  const [currentImage, setCurrentImage] = useState(-1);
  //   const handleImageOverlay = (props) => {
  //       setCurrentImage(props.id);
  //   }
  const handleImageOverlay = (index) => {
    setCurrentImage(index);
    console.log(index)
    console.log(gallery)
    console.log(gallery[1].img)
  };


  return (
    <>
    {currentImage ==! -1 && <GalleryOverlay img={gallery[currentImage].img} alt={gallery[currentImage].alt}/>}
      <div className={classes.componentWrapper}>
        {gallery.map((item, index) => (
          <div
            key={index}
            className={classes.img}
            onClick={() => handleImageOverlay(index)}>
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
