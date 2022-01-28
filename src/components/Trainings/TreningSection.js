const TreningSection = (props) => {
  const trening = props.trening;
  return (
    <div className="section-wrapper">
        <div>{props.tr_name}</div>
      <ul>
        {trening.map((trening) => (
          <li>{trening.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreningSection;
