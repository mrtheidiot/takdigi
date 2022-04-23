import React from "react";
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

  const directionClass = reverse === 1 ? `${classes.normal}` : `${classes.reverse}`;

  return (
    <>
      <div className={classes.wrapper}>
          {itemlist.map((item) => (
              <div className={`${classes.section} ${directionClass}` }>
                  <div className={classes.image}>
                        test
                  </div>
                  <div >

                  </div>

              </div>
          ))}

      </div>
    </>
  );
};

export default Sukienki1;
