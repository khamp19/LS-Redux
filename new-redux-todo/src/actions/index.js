//actions 
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';


//create new todo
//takes in 'newTodo from state on todoList component 
export const addTodo = (newTodo) => {
    const newItem = {
        value: newTodo,
        completed: false
    };
    return {
        type: ADD_TODO,
        payload: newItem
    }
}

export const toggleComplete = (id, completed) => {
    return {
        type: TOGGLE_COMPLETE,
        id,
        completed
    }
}