import React from "react";
import { useState } from "react";
import { Button, h1 } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

const repetitions = [
  {
    title: "hello",
    correct: "привет",
  },
  {
    title: "goodbye",
    correct: "пока",
  },
  {
    title: "bear",
    correct: "медведь",
  }
]; 

function Result() {
  return (
    <Link to="/resultper">
      <h1>hey</h1>
    </Link>
  );
}

function CardsLearning() {
  const [step, setStep] = useState(0);
  const repetition = repetitions[step];
  const len = repetitions.length;

  const [flip, setFlip] = useState(false);
  const handleButtonClick = () => {
    setFlip(!flip);
    setStep(step + 1);
  };

  return (
    <div className="outer-div">
      <div className="inner-div">
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
          <div className="cardsOff">
            {repetitions[step].title}
            <br />
            <br />
            <Button className="cardsButton" onClick={() => setFlip(!flip)}>
              Flip
            </Button>
          </div>
          <div className="cardsOn">
            {repetitions[step].correct}
            <br />
            <br />
            <Button className="cardsButton" onClick={() => setFlip(!flip)}>
              Flip
            </Button>
            <br />

            {step == len - 1 ? (
              <Link to="/resultper">
                <Button className="cardsButton">Flip2</Button>
              </Link>
            ) : (
              <>
                <Button
                  className="cardsButton"
                  onClick={() => handleButtonClick()}
                >
                  Flip2
                </Button>
              </>
            )}
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default CardsLearning;
