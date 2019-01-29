//actions 
const GET_TODOS = 'GET_TODOS';
const ADD_TODO = 'ADD_TODO';
const SET_COMPLETE = 'SET_COMPLETE';

//get todos
const getTodos = () => {
    return {
        type: GET_TODOS,
        payload: todos
    }
}
export { getTodos };

//create new todo
const addTodo = () => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
export { addTodo };

//set complete
const setComplete = () => {
    return {
        type: SET_COMPLETE
    }
}
export { setComplete }