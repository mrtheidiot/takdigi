import Banner from "../Banner/Banner"
import './Asortyment.css';
import szarpaki from './../../assets/szarpaki.jpg';
import spodniczka from './../../assets/spdnczka3.jpg';

import AsortymentSection from "./AsortymentSection";

const Asortyment = () => {
    const items = [
        {title: 'szarpaki', description: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."', zdj: `${szarpaki}`},
        {title: 'sukienki', description: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."', zdj: `${spodniczka}`}
    ]


    return (
    <>
      <Banner id={1} />
      <>
        {items.map((trening, index) => (
          <AsortymentSection
            title={trening.title}
            description={trening.description}
            image={trening.zdj}
            ifReverse={index % 2 === 0 ? 0 : 1}
            key={index}
          />
        ))}
      </>
    </>)
} 

export default Asortyment