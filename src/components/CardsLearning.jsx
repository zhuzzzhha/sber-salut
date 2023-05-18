import React from "react";
import { useState } from "react";
import { Button, h1 } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { Navigate } from 'react-router-dom';

/*const repetitions = [
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
]; */
let data = require('./data.json');
console.log(data)
  function get_data(evolve, unit){
    const result = data[evolve][unit];
    let json_data = []
    for (let i = 0; i < result.length - 2; i++) {
      var newDict = {
        "title": result[i],
        "correct": result[i+1]
      };
        json_data.push(newDict)
    }
    return json_data
  }

function Result() {
  return (
    <Link to="/resultper">
      <h1>hey</h1>
    </Link>
  );
}

function CardsLearning(props) { 
  /*console.log(props.onLearn.notes[0].title);*/
  let evolve = "evolve_1";
  let unit = "unit_1";
  console.log("cardslearning", props.onLearn);
  if (props.onLearn.notes[0].title != "no" && props.onLearn.notes[0].title!= Object){
  evolve = "evolve_" + String(props.onLearn.notes[0].title);
  }
  if (props.onLearn.notes[1].title != "no"&& props.onLearn.notes[1].title!= Object){
  unit = "unit_" + String(props.onLearn.notes[1].title);
  }
  const repetitions = get_data(evolve, unit);
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
              Узнать перевод
            </Button>
          </div>
          <div className="cardsOn">
            {repetitions[step].correct}
            <br />
            <br />
            <Button className="cardsButton" onClick={() => setFlip(!flip)}>
              Вернуться к предыдущему
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
                  Перейти к следующему
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
