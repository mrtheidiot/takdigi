import './treningsection.css';

const TreningSection = (props) => {
  const styles = props.direct === "1" ? "section-wrapper reverse-row" : "section-wrapper";
  const trening = props.trening;
  return (
    <div className={styles}>
        <div className="section-image">
            <img src={props.zdj} />
        </div>
        <div className="section-descr">
          <div className='section-title'>{props.tr_name}</div>
          <div className='section-opis'>{props.opis}</div>
        </div>
    </div>
  );
};

export default TreningSection;
