import React from "react";

import "../App.css";

class EvolveForm extends React.Component {
  constructor() {
      super();
      this.state = {
          evolve: '',
      };
  }

  handleChange = (event) => {
      this.setState({evolve: event.target.value});
  };

  render () {
    const { onAdd } = this.props;

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(this.state.evolve);
          this.setState({
            note: '',
          })
        }}
      >
        <input
          className   = "evolve-choose"
          type        = "text"
          placeholder = "Choose evolve"
          value       = { this.state.evolve }
          onChange    = {({ target: { value } }) => this.setState({
            evolve: value,
          })}
          required
          autoFocus
        />
      </form>
    )
  }
}
<input value={someValue} onChange={handleChange} />
/*export class AddTask extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }

  render () {
    const { onAdd } = this.props;

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(this.state.note);
          this.setState({
            note: '',
          })
        }}
      >
        <input
          className   = "add-task"
          type        = "text"
          placeholder = "Add Note"
          value       = { this.state.note }
          onChange    = {({ target: { value } }) => this.setState({
            note: value,
          })}
          required
          autoFocus
        />
      </form>
    )
  }

}*/

