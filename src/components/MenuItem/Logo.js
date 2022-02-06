import LogoImg from "./../../assets/Logo1.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo__main">
      <Link to="/">
        <div className="logo__img">
          <img src={LogoImg} alt="logo tak to sie obi" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
