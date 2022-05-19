import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import classes from "./Sukienki1.module.css";
import zdj1 from "./../../../assets/spodniczka1.jpg";
import './Sukienki1.css';

const Sukienki1 = () => {
  const itemlist = [
    {
      nazwa: "Spódniczki standardowe",
      link: "/asortyment/sukienki/shopitem",
      description1: ["Gładka, rozkloszowania spódniczka taneczna. Model z szerokim pasem okalającym biodra oraz falbaną z pełnego koła."],
      description2: ["W pasie spódnicę utrzymuje gumka. Materiał jest lejący, dzięki czemu spódnica ładnie się układa."],
      img: `${zdj1}`,
      direction: 0,

    },
    {
      nazwa: "Spódniczki dla wysokich psów",
      link: "/asortyment/sukienki/shopitem",
      description1: ["Gładka, rozkloszowania spódniczka taneczna. Model z szerokim pasem okalającym biodra oraz falbaną z pełnego koła."],
      description2: ["W pasie spódnicę utrzymuje gumka. Materiał jest lejący, dzięki czemu spódnica ładnie się układa."],
      img: `${zdj1}`,
      direction: 1,
    },
  ];


  return (
    <>
      <div className={classes.wrapper}>
        {itemlist.map((item) => (
          <Link to={item.link}>
          <div className={item.direction === 0 ? 'sukienki_right' : 'sukienki_left'}>
            <div className={classes.image}>
              <img src={item.img} alt="piesek" />
            </div>
            <div className={classes.textarea}>
              <div className={classes.title}>{item.nazwa}</div>
              <div className={classes.opis}>{item.description1}</div>
              <div className={classes.opis}>{item.description2}</div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sukienki1;
