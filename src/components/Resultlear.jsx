import React from "react";
import { useState } from "react";
import { Button } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";

function Resultlear() {
  return (
    <div>
      <h1 className="heading">Поздравляем, ты прошел изучение!</h1>
      <Button data-hint="Чтобы начать изучать слова тебе нужно выбрать evolve, unit и нажать start.">
          Помощь
        </Button>
      <div className="btn-group">
        <div className="divModes">
          <Link to="/">
            <Button>Выход</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resultlear;
