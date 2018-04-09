import React from "react";
import { render } from "react-dom";
import "./styles/DinamicForm.css";

export default class DinamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.onFormSubmit) this.props.onFormSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.model.map(inputItem => (
          <div class="form-group">
            <label>{inputItem.name}</label>
            <input
              type={inputItem.type}
              name={inputItem.name}
              onChange={this.onInputChange}
              placeholder={inputItem.name}
            />
          </div>
        ))}
        <div class="form-group">
          <button>Confirm</button>
        </div>
      </form>
    );
  }
}
