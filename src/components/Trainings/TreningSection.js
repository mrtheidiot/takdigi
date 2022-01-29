import './treningsection.css';


const TreningSection = (props) => {
  const trening = props.trening;
  return (
    <div className="section-wrapper">
        <div className="section-image">
            <img src={props.zdj} />
        </div>
        <div className="section-descr">
          <div>tytul</div>
        </div>
    </div>
  );
};

export default TreningSection;
