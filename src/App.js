import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(e) {
    if (e.keyCode !== 13) return;
    this.setState({
      value: "",
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          text: this.state.value
        }
      ]
    })
  }

  handleRemove(index) {
    this.state.todos.splice(index,1)
    const todos = [...this.state.todos];
    this.setState({
      todos,
    })
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onKeyUp={this.handleAdd}
        />
 
        {
          this.state.todos.map((todo, index) => {
            return <div key={todo.id}>
                  {todo.text}
                <button onClick={() => this.handleRemove(index)}>Remove</button>
            </div>
          })
        }        
        
      </div>
    );
  }
}

export default App;
