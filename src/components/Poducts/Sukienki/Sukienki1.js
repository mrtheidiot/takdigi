import React from 'react'
import classes from '.Sukienki1.module.css';
import Sukienki2 from './Sukienki2';

const Sukienki1 = () => {
  const items = [
    {
      title: "Szarpaki",
      description:
        '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      zdj: `${szarpaki}`,
    },
    {
      title: "Spódniczki/pasy treningowe",
      description:
        '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      zdj: `${spodniczka}`,
    },
  ];

  return (
    <>
      <Banner id={2} />
      <>
        <div className="main-wrapper-asortyment">
          {items.map((trening, index) => (
            <AsortymentSection
              title={trening.title}
              description={trening.description}
              image={trening.zdj}
              ifReverse={index % 2 === 0 ? 0 : 1}
              key={index}
            />
          ))}
        </div>
      </>
    </>
  );
}

export default Sukienki1