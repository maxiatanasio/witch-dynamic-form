import React from "react";

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    if (this.props.onFormSubmit) this.props.onFormSubmit(this.state, this.references);
  }
  
  references = [];

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.model.map(inputItem => (
          <div key={inputItem.name} className="form-group">
            <label>{inputItem.name}</label>
            <input
              ref={node => {this.references[inputItem.name] = node}}
              type={inputItem.type}
              name={inputItem.name}
              onChange={this.onInputChange}
              placeholder={inputItem.name}
            />
          </div>
        ))}
        <div className="form-group">
          <button>Confirm</button>
        </div>
      </form>
    );
  }
}
