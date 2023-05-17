import React from "react";
import { useState } from "react";
import { Button } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";

function Resultlear() {
  return (
    <div className="outer-div inner-div btn-group">
      <h1>Поздравляем, ты прошел изучение</h1>
      <Link to="/">
        <Button>Выход</Button>
      </Link>
    </div>
  );
}

export default Resultlear;
