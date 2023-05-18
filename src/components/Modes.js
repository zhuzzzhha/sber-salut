import React from "react";
import { useState } from "react";
import { Button } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';


export class Modes extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }
 

  render () {
    const { onModes } = this.props;
    const { onChangeMode } = this.props;
    console.log("allomode", this.props.onChangeMode.notes[2].title);
    if (this.props.onChangeMode.notes[2].title == "repetition") {
      return (
      <Navigate to="/CardsRepetition" />
      );
    }
    if (this.props.onChangeMode.notes[2].title == "learning") {
      return (
      <Navigate to="/CardsLearning" />
      );
    }
  return (
    <div className="btn-group">
      <h1>Выбери режим</h1>
      <div className="divModes">
        <Link to="/learning">
          <Button onClick= {() => this.props.onModes({note: 'learning'})}>Изучение</Button>
        </Link>
        <p></p>
        <Link to="/repetition">
          <Button onClick={() => this.props.onModes({note: 'repetition'})}>Повторение</Button>
        </Link>
      </div>
    </div>
  );

  }
}
export default Modes;
