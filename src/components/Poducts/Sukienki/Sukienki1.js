import React, { useState, useEffect } from "react";
import classes from "./Sukienki1.module.css";
import zdj1 from "./../../../assets/p1.jpg";

const Sukienki1 = () => {
  const itemlist = [
    {
      nazwa: "Spodniczka standardowa",
      link: "/kontakt",
      description: ["taka i taka spodniczka", "taka i taka"],
      img: `${zdj1}`,
    },
    {
      nazwa: "Spodniczka standardowa",
      link: "/kontakt",
      description: ["taka i taka spodniczka", "taka i taka"],
      img: `${zdj1}`,
    },
  ];

  return (
    <>
      <div className={classes.wrapper}>
        {itemlist.map((item) => (
          <div className={classes.section}>
            <div className={classes.image}>
              <img src={item.img}




          
          </div>
        ))}
      </div>
    </>
  );
};

export default Sukienki1;
