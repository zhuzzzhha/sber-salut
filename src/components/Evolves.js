import React from 'react';
import { useState } from 'react';
import {Button} from '@salutejs/plasma-ui';
import { Link } from 'react-router-dom';

function Evolves() {
  const [selected, setSelected] = useState([]);

  const handleButtonClick = (num) => {
    if (selected.includes(num)) {
      setSelected(selected.filter((n) => n !== num));
    } else {
      setSelected([...selected, num]);
    }
  };

  return (
    <div className='btn-group'>
        <h1>Выбери свой Evolve</h1>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Link to="/Unit">
            <Button key={num} onClick={() => handleButtonClick(num)}>
              {num}
            </Button>
        </Link>
      ))}
    </div>
  );
}

export default Evolves;
