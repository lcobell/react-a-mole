import react from "react";
import molePic from "../mole.png";
import { useEffect } from "react";

const Mole = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 7000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "25vw" }}
        src={molePic}
        onClick={props.handleClick}
      />
    </div>
  );
};
export default Mole;
