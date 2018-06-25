import React, { Component } from 'react';
import AddTodo from './AddTodo';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			todo: []
		}

	}

	handleChange(text) {
		this.setState(state => ({ todo: state.todo.concat(text) }))
	}

  render() {
    return (
      <div>
      	<AddTodo callback={this.handleChange.bind(this)}/>
      	<h1>Todo List!</h1>
      </div>
    );
  }
}

export default App;
