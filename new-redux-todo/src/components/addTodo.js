import React, { Component } from 'react';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodo: {
                value: '',
                completed: false
            }
        }
    }

    handleInput = (e) => {
        this.setState({
            newTodo: {
                value: e.target.value,
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = this.state.newTodo;
        this.props.addTodo(newTodo);
        this.setState({
            newTodo: {
                value: ''
            }
        })
    }

    render(){
        return(
            <div>
                <h3>add new todo here:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleInput}
                        value={this.state.newTodo.value}
                        placeholder="new todo" 
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newTodo: state
    }
}

export default connect(mapStateToProps, {addTodo})(AddTodo);