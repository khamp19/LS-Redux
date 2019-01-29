import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to my Redux ToDo App</h2>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
