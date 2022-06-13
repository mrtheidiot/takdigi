import React from 'react'
import ShopItem from '../../../ShopItem/ShopItem'
import dogo1 from './../../../assets/p1.jpg';
import dogo2 from './../../../assets/p2.jpg';

const SpodniczkiStandardowe = () => {
  const imagesList = [
    {image: `${dogo1}`, alt: "alt"},
    {image: `${dogo1}`, alt: "alt"},
    {image: `${dogo2}`, alt: "alt"},
    {image: `${dogo1}`, alt: "alt"},
    {image: `${dogo1}`, alt: "alt"},
    {image: `${dogo2}`, alt: "alt"},
    
  ]

  const descriptionList = [
    {descs: ["Spodniczka bez wzoru, czarna, po 20zł", "Ideanla na lato", "Cena: 1000zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 30zł", "Ideanla na lato", "Cena: 80zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 40zł", "Ideanla na lato", "Cena: 70zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 40zł", "Ideanla na lato", "Cena: 70zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 40zł", "Ideanla na lato", "Cena: 70zł"]},
    {descs: ["Spodniczka bez wzoru, czarna, po 40zł", "Ideanla na lato", "Cena: 70zł"]}
  ]

  // to jest aktualnie nie uzywane
  const productAllData = {
    title: "Spódniczki standardowe",
    images: {imagesList},
    descriptions: {descriptionList}

  }


  return (
    <ShopItem  
      title="Spodniczka standardowa"
      imagesList={imagesList}
      descriptionList={descriptionList}
    />
  )
}

export default SpodniczkiStandardowe