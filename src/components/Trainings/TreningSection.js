import './treningsection.css';
import Price from './Price';
import Price2 from './Price2';

const TreningSection = (props) => {
  const styles = props.direct === "1" ? "section-wrapper reverse-row" : "section-wrapper";
  const trening = props.trening;
  const cena = props.price;
  return (
    <div className={styles}>
        <div className="section-image">
            <img src={props.zdj} />
        </div>
        <div className="section-descr">
          <div className='section-title'>{props.tr_name}</div>
          <div className='section-opis'>{props.opis}</div>
          <div className="section-price">
              {props.direct ? <Price2 /> : <Price />}
          </div>
        </div>
    </div>
  );
};

export default TreningSection;
