import "./AsortymentSection.css";

const AsortymentSection = (props) => {
  const styles2 =
    props.ifReverse === 0 ? "asortymentsection-1" : "asortymentsection-1 asortymentsection-1-bgchange";

  return (
    <div className={styles2}>
        <div className="asortymentsection-2">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="asortymentsection-3">
          <div className="asortymentsection-4">{props.title}</div>
          <div className="asortymentsection-5">
            <div className="asortymentsection-6">{props.description}</div>
            <div className="asortymentsection-7">
              tu beda linki - do zrobienia
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default AsortymentSection;