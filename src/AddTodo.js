import React, { Component } from 'react';

class AddTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: ''
		}
	}

	onChange(e) {
		this.setState( {
			userInput: e.target.value
		})
	}

	onClick() {
		this.props.callback(this.state.userInput)
		this.setState({
			userInput: ''
		})
	}

  render() {
    return (
    	<div>
        <input type="text" value={this.state.userInput} onChange={this.onChange.bind(this)}/>
        <button onClick={this.onClick.bind(this)}>Add</button>
      </div>
    );
  }
}

export default AddTodo;