import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props){
        super(props);
    }

    handleInput = (e) => {
        this.setState({
            newTodo: {
                value: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render(){
        return(
            <div>
                <h3>add new todo here:</h3>
                <form>
                    <input 
                        onChange={this.handleInput}
                        placeholder="new todo" 
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo;