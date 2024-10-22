import { useState } from "react";
import Front from "./Front";
import Back from "./Back";

const PlayingCard = (props) => {
  const { value, color, icon } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? <Front value={value} color={color} icon={icon} /> : <Back />}
    </div>
  );
};

export default PlayingCard;
