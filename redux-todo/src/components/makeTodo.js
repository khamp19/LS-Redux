import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { toggleComplete } from '../actions';


class MakeTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todo: '',
      todos: ["make bed", "take out trash"]
    };
  };

  addTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({
      newTodo: '',
    });
    console.log(todos);
  }

  updateNewTodo = (event) => {
    this.setState({
      newTodo: event.target.value,
      completed: false
    });
  }

  toggleComplete = (state) => {
    this.state.toggleComplete(this.state.index);
  };

  render() {
    return(
      <div>
        <form>
          <input onChange={this.updateNewTodo} placeholder="new todo" value={this.state.newTodo} />
          <button onClick={this.addTodo}>Add to list</button>
        </form>
        <ul>
          {this.state.todos.map((todo, id) => {
            return (
              <li key={id} onClick={this.toggleComplete}>
                {todo} {this.state.todo.value}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addTodo: addTodo },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MakeTodo);
