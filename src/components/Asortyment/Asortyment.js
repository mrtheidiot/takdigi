import Banner from "../Banner/Banner";
import "./Asortyment.css";
import szarpaki from "./../../assets/szarpaki.jpg";
import spodniczka from "./../../assets/spdnczka3.jpg";

import AsortymentSection from "./AsortymentSection";

const Asortyment = () => {
  const items = [
    {
      title: "Szarpaki",
      description:
        '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      zdj: `${szarpaki}`,
      link: "/asortyment/szarpaki"
    },
    {
      title: "Spódniczki/pasy treningowe",
      description:
        '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      zdj: `${spodniczka}`,
      link: "/asortyment/sukienki",
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
              link={trening.link}
              key={index}
            />
          ))}
        </div>
      </>
    </>
  );
};

export default Asortyment;
