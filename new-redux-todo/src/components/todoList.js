import React, { Component } from 'react';
import { addTodo, toggleComplete } from '../actions/index.js';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
    }

    handleInput = (e) => {
        this.setState({ newTodo: e.target.value });
    }

    todoSubmit = (e) => {
        e.preventDefault();
        const newTodo = this.state.newTodo;
        this.props.addTodo(newTodo);
        this.setState({ newTodo: '' });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.todoSubmit}>
                        <input 
                            placeholder="add new todo"
                            value={this.state.newTodo}
                            onChange={this.handleInput}
                        />
                    </form>
                </div>
                <div>
                    <h3>this is my todo list</h3>
                    <ul>
                        {this.props.todos.map((todo, i) => {
                            const style = {
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }
                            return (
                                <li key={i} 
                                    style={style}
                                    onClick={()=> {this.props.toggleComplete(i, !todo.completed)}}>
                                        {todo.value}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, { addTodo, toggleComplete })(TodoList);