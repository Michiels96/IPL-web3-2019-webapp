import React from "react";
import TodoApp from './TodoApp';

class TodoAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      text: "" ,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <TodoApp
        items={this.state.items}
        text={this.state.text}

        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}

export default TodoAppContainer;
