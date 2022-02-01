import { Link } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="dropdown">
      <div className="menuItem__main">
        <Link to={props.destination}>{props.name}</Link>
      </div>
      {props.dropdown && (
        <div class="dropdown-content">
          {props.dropdown.map((trening, index) => (
            <div className="dropdown-link">
              <Link to={trening.slug} key={index}>
                {trening.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
