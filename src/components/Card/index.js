import cx from "classnames";
import "./style.css";

const Card = ({ className, children }) => {
  return <div className={cx(className, "cle-card")}>{children}</div>;
};

export default Card;
