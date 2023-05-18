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
    const { onChangeMode } = this.props;
    console.log("allomode", this.props.onChangeMode.notes);
    if (this.props.onChangeMode.notes.length > 2 && this.props.onChangeMode.notes[2].title != "no" && this.props.onChangeMode.notes[2].title != Object) {
      return (
      <Navigate to="/learning" />
      );
    }
  return (
    <div className="btn-group">
      <h1>Выбери режим</h1>
      <div className="divModes">
        <Link to="/learning">
          <Button onClick= {() => this.props.onModes('learning')}>Изучение</Button>
        </Link>
        <p></p>
      </div>
    </div>
  );

  }
}
export default Modes;
