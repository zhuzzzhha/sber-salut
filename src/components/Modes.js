import React from "react";
import { useState } from "react";
import { Button } from "@salutejs/plasma-ui";
import { Link } from "react-router-dom";


export class Modes extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }
 

  render () {
    const { onModes } = this.props;
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
