import React from "react";
import { useState } from "react";
import { Button } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";

function Modes() {
  const [selected, setSelected] = useState([]);

  const handleButtonClick = (num) => {
    if (selected.includes(num)) {
      setSelected(selected.filter((n) => n !== num));
    } else {
      setSelected([...selected, num]);
    }
  };

  return (
    <div className="btn-group">
      <h1>Выбери режим</h1>
      <div className="divModes">
        <Link to="/learning">
          <Button onClick={() => handleButtonClick()}>Изучение</Button>
        </Link>
        <p></p>
        <Link to="/repetition">
          <Button onClick={() => handleButtonClick()}>Повторение</Button>
        </Link>
      </div>
    </div>
  );
}

export default Modes;
