import classes from "./kontakt.module.css";

const Kontakt = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.seg1}>
        <div>Dane firmy:</div>
        <div>
          Animalewra Dorota Alewras
          <br></br>
          ul. Monte Cassino 36/7
          <br></br>∑ 70-465 Szczecin
        </div>
        <div>Dane do przelewu:</div>
        <div>Animalewra Dorota Alewras</div>
        <div>
          ING BANK Śląski:
          <br></br>
          12 3456 8754 1234 1234
        </div>
      </div>
      <div className={classes.seg2}>
        <div>Dane kontaktowe:</div>
        <div>
          Tel: 697 288 234
          <br></br>
          email: taktosieobi@gmail.com
          <br></br>
          <div className={classes.messenger}>
            <a
              href="https://m.me/ObiTrening"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-2x fa-facebook-messenger"></i>{" "}
            </a>
            Messenger Me!
          </div>
        </div>
      </div>
      <div className={classes.seg3}>
        <div className={classes.socialwrapper}>
          <div className={classes.title}>Obserwuj nas tu:</div>
          <div className={classes.socialmedia}>
          <a
              href="https://m.me/ObiTrening"
              target="_blank"
              rel="noreferrer noopener"
            >
            <i class="fab fa-2x fa-facebook"></i> </a>ObiTraining
            
          </div>
          <div className={classes.socialmedia}>
          <a
              href="https://m.me/ObiTrening"
              target="_blank"
              rel="noreferrer noopener"
            >
          <i class="fab fa-2x fa-instagram"></i></a> taktosieobi
          
          </div>
        </div>
        <div className={classes.socialwrapper}>
          <div className={classes.title}>Karma Husse:</div>
          <div className={classes.socialmedia}>
          <a
              href="https://m.me/ObiTrening"
              target="_blank"
              rel="noreferrer noopener"
            >
            <i class="fab fa-2x fa-facebook"></i></a> AnimalewraHusse
           
          </div>
          <div className={classes.socialmedia}>
          <a
              href="https://m.me/ObiTrening"
              target="_blank"
              rel="noreferrer noopener"
            >
          <i class="fab fa-2x fa-instagram"></i></a> husse_szczecin
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
