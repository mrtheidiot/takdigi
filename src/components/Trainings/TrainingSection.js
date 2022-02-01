import "./TrainingSection.css";

const TrainingSection = (props) => {
  const styles1 =
    props.ifReverse === 0 ? "section-main-position" : "reverse-row";
  const styles2 = 
    props.ifReverse === 0 ? "section-wrapper-1" : "section-wrapper-2"

  return (
    <div className={styles2}>
      <div className={styles1}>
        <div className="section-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="description-wrapper">
          <div className="description-title">{props.title}</div>
          <div className="description-1">{props.description}</div>
          <div className="desctiption-linksprices">
            Tu beda linki i ceny - jeszcze do zrobienia
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;
