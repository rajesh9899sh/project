import { useState } from "react";
import data from "..";
import Button1 from "../newButton/Button1";
import "./index.css";

const Box = () => {
  const [cardData, setCardData] = useState(data);

  const removeItem = (id: number) => {
    const newCardData = cardData.filter((item) => item.id !== id);
    setCardData(newCardData);
  };

  return (
    <div className="containers">
      {cardData.map((item) => {
        return (
          <div className="boxs" key={item.id}>
            <img className="card-image" src={item.image} alt={item.name} />
            <div className="price">{"$" + item.price}</div>
            <div className="name">{item.name}</div>
            <div className="info">{item.info}</div>
            <Button1 Remove={() => removeItem(item.id)} />
          </div>
        );
      })}
    </div>
  );
};

export default Box;
