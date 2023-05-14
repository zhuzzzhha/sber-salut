import React from 'react';
import { useState } from 'react';
import {Button} from '@salutejs/plasma-ui';
import { Link } from 'react-router-dom';

export class Evolves extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }
 

  render () {
    const { onEvolve } = this.props;

  return (
    
    <div className='btn-group'>
        <h1>Выбери свой Evolve</h1>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Link to="/Unit">
            <Button key={num} onClick={() => this.props.onEvolve({note: num})}>
              {num}
            </Button>
        </Link>
      ))}
    </div>
  );
}
}
export default Evolves;
