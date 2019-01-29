import React, { Component } from 'react';
import { getTodos } from '../actions/index.js';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getTodos();
    }

    render() {
        return (
            <div>
                <h3>this is my todo list</h3>
                <ul>
                    {this.props.todos.map((todo, i) => {
                        return (
                            <li key={i}>{todo.value}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, {getTodos})(TodoList);