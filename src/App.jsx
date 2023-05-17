import React from 'react';

import {
  createSmartappDebugger,
  createAssistant,
} from "@salutejs/client";
import { useTransition, animated } from '@react-spring/web'
import Evolves from "./components/Evolves"
import Units from "./components/Units"
import CardsLearning from "./components/CardsLearning"
import CardsRepetition from "./components/CardsRepetition"
import Resultper from "./components/Resultper"
import Resultlear from "./components/Resultlear"
import Modes from "./components/Modes"
import { BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';
import "./App.css";


const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};



export class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      notes: [],
    }

    this.assistant = initializeAssistant(() => this.getStateForAssistant());
    this.assistant.on("data", (event/*: any*/) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });

  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant() {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.notes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'evolve_choose':
          return this.evolve_choose(action);

        case 'unit_choose':
          return this.unit_choose(action);

        case 'mode_choose':
          return this.mode_choose(action);

        default:
          throw new Error();
      }
    }
  }
  evolve_choose (action) {
    console.log('evolve_choose', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          evolve:     action.note
        },
      ],
    })
    console.log(this.state.notes)
  }
  unit_choose (action) {
    console.log('unit_choose', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          unit:     action.note
        },
      ],
    })
    console.log(this.state.notes)
  }
  mode_choose (action) {
    console.log('mode_choose', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          title:     action.note
        },
      ],
    })
    console.log(this.state.notes)
  }
  cards_learn (action) {
    console.log('cards_learn', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          title:     action.note
        },
      ],
    })
    console.log(this.state.notes)
  }
  render() {
    console.log('render');
    return (
      <Router>
            <Routes>
              <Route path="/" element={ 
              <Evolves 
                  onEvolve={ (note)=>{this.evolve_choose({ type: "evolve_choose", note }); } }
                  />} />
              <Route path="/unit" element={
              <Units 
                  onUnit={ (note)=>{this.unit_choose({ type: "unit_choose", note }); } }
                  />} />
              <Route path="/modes" element={
              <Modes
              onModes={ (note)=>{this.mode_choose({ type: "mode_choose", note }); } }
                  />} />
              <Route path="/learning" render={this.state.notes} element={
              <CardsLearning 
              onLearn = {(this.state.notes)}
              />} />
              <Route path="/repetition" render={this.state.notes} element={<CardsRepetition 
              onRepeat = {(this.state.notes)}/>} />
              <Route path="/resultper" element={<Resultper />} />
              <Route path="/resultlear" element={<Resultlear />} />

            </Routes>
      </Router >
    );
  }
}
export default App;
