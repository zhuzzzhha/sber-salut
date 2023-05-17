import React from "react";
import { useState } from "react";
import { Button, h1 } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

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

function Result() {
  return (
    <Link to="/resultper">
      <h1>hey</h1>
    </Link>
  );
}
function getMatchEvolve(word){
  if (word == 'первый' || word =='один'){
    word = "evolve_1";
  }
  if (word == 'второй' || word =='два'){
    word = "evolve_2";
  }
  if (word == 'третий' || word =='три'){
    word = "evolve_3";
  }
  if (word == 'четвертый' || word =='четыре'){
    word = "evolve_4";
  }
  if (word == 'пятый' || word =='пять'){
    word = "evolve_5";
  }
  if (word == 'шестой' || word =='шесть'){
    word = "evolve_6";
  }
  word = "evolve_" + word;
  return word
}
function getMatchUnit(word){
  if (word == 'первый' || word =='один'){
    word = "unit_1";
  }
  if (word == 'второй' || word =='два'){
    word = "unit_2";
  }
  if (word == 'третий' || word =='три'){
    word = "unit_3";
  }
  if (word == 'четвертый' || word =='четыре'){
    word = "unit_4";
  }
  if (word == 'пятый' || word =='пять'){
    word = "unit_5";
  }
  if (word == 'шестой' || word =='шесть'){
    word = "unit_6";
  }
  if (word == 'седьмой' || word =='семь'){
    word = "unit_7";
  }
  if (word == 'восьмой' || word =='восемь'){
    word = "unit_8";
  }
  if (word == 'девятый' || word =='девять'){
    word = "unit_9";
  }
  if (word == 'десятый' || word =='десять'){
    word = "unit_10";
  }
  if (word == 'одиннадцатый' || word =='одиннадцать'){
    word = "unit_11";
  }
  if (word == 'двенадцатый' || word =='двенадцать'){
    word = "unit_12";
  }
  word = "unit_" + word;
  return word
}
function CardsRepetition(props) {
  console.log(props.onRepeat.notes[0].title);
  const evolve = getMatchEvolve(props.onRepeat.notes[0].title.note);
  const unit = getMatchUnit(props.onRepeat.notes[1].title.note);
  const repetitions = get_data(evolve, unit);
  const [step, setStep] = useState(0);
  const repetition = repetitions[step];
  const len = repetitions.length;

  const [flip, setFlip] = useState(false);
  const handleButtonClick = () => {
    setStep(step + 1);
    setFlip(!flip);
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

export default CardsRepetition;
