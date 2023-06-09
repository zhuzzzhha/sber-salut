import React, {useEffect} from "react";
import {Button} from "@salutejs/plasma-ui";
import {useLocation, useNavigate} from "react-router-dom";

// export class Evolves extends React.Component {
export function Evolves(props) {
  // const navigate = useNavigate();
  const {onOpen, onChoose} = props;
   function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  useEffect(() => {
    console.log("Evolves: useEffect");
    onOpen();
    window.scrollTo(0, 0);
    disableScroll();
    return () => {
    };
  }, []);

  return (
    <div>
      <h1 className="heading">Выбери свой уровень</h1>

      <p></p>
      <div className="btn-group">
        {[1, 2, 3, 4, 5, 6].map((evolve) => (
          <Button
            onClick={() => onChoose({evolve})}
            key={evolve}
          >
            {evolve}
          </Button>
        ))}
      </div>

      <div className="background">
        <div className="transparent">Прозрачный текст</div>
        <div className="transparent">Прозрачный текст</div>
      </div>
    </div>
  );
  // }
}

export default Evolves; 
