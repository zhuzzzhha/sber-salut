import React from "react";
import { useState } from "react";
import { Button } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

const card = document.querySelector(".card");
const textInput = document.getElementById("textInput");

function Learning() {
  const [selected, setSelected] = useState([]);

  const handleButtonClick = (num) => {
    if (selected.includes(num)) {
      setSelected(selected.filter((n) => n !== num));
    } else {
      setSelected([...selected, num]);
    }
  };
  const [flip, setFlip] = useState(false);

  return (
    <div className="outer-div">
      <div className="inner-div">
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
          <div className="cardsOff">
            Repetition
            <br />
            <br />
            <Button className="cardsButton" onClick={() => setFlip(!flip)}>
              Flip
            </Button>
          </div>
          <div className="cardsOn">
            English
            <br />
            <br />
            <Button className="cardsButton" onClick={() => setFlip(!flip)}>
              Flip
            </Button>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default Learning;
