# Dynamic Form

react-dynamic-form allows you to create forms base on data models and control the submission of it´s data.

## Example

```
import React from 'react';
import ReactDOM from 'react-dom';
import DynamicForm from 'react-dynamic-form';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  model = [
    { type: "text", name: "name", label: "Username" },
    { type: "password", name: "password", label: "Password" }
  ];

  render() {
    return (
      <div>
        <DynamicForm model={this.model} onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }

  onFormSubmit(model) {
    this.setState({
      model: model,
	  submit: true
    });
	//Handle form submission
  }

}

render(<App />, document.getElementById("root"));
```

## Authors

* **Maximiliano Atanasio** - *Initial work* - [GitHub Account](https://github.com/maxiatanasio)