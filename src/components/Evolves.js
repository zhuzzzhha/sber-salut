import React from 'react';
import { useState } from 'react';
import {Button} from '@salutejs/plasma-ui';
import { Link } from 'react-router-dom';


function SixButtons() {
  const [selected, setSelected] = useState([]);

  const handleButtonClick = (num) => {
    if (selected.includes(num)) {
      setSelected(selected.filter((n) => n !== num));
    } else {
      setSelected([...selected, num]);
    }
  };

  return (
    <div>
        <h1>Выбери свой Evolve</h1>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Link to="/Unit.js">
            <Button key={num} onClick={() => handleButtonClick(num)} style={{ backgroundColor: selected.includes(num) ? 'green' : 'white' }}>
              {num}
            </Button>
        </Link>
      ))}
    </div>
  );
}

export default SixButtons;
import TenButtons from './Unit';    
