import React from 'react';
import { useState } from 'react';
import {Button} from '@salutejs/plasma-ui';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export class Units extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }
 

  render () {
    const { onUnit } = this.props;
    const { onChangeUn } = this.props;
    console.log("allounit", this.props.onChangeUn.notes[1].title);
    if (this.props.onChangeUn.notes[1].title != "no") {
      console.log(this.props.onChangeUn.notes[1].title);
      return <Navigate to="/Modes"/>;
    }
  return (
    
    <div className='btn-group2'>
        <h1>Выбери свой Unit</h1>
      {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12].map((num) => (
        <Link to="/Modes">
            <Button key={num} onClick={() => this.props.onUnit({note: num})}>
              {num}
            </Button>
        </Link>
      ))}
    </div>
  );
}
}
export default Units;
