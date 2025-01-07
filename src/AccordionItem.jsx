import { useState } from "react";

function AccordionItem({ item }) {
  const [display, setDisplay] = useState(null);
  const handleClick = (id) => {
    setDisplay(id !== display ? id : null);
  };

  return (
    <div className="item" onClick={() => handleClick(item.id)}>
      <p className="number">{item.id < 9 ? `0${item.id}` : `${item.id}`}</p>
      <p className="title">{item.question}</p>
      <p className="icon">{display ? "⛔" : "➕"}</p>
      {display && <div className="content-box">{item.text}</div>}
    </div>
  );
}

export default AccordionItem;
