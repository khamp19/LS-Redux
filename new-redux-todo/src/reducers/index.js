//reducers
import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/index.js';

const initialTodos = [
    {value: 'clean room', completed: false},
    {value: 'make bed', completed: false}
]

const todosReducer = (todos = initialTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, action.payload];
        case TOGGLE_COMPLETE:
            return todos.map((todo, index) => {
                if(index === action.id) {
                    todo.completed = action.completed
                }
                return todo
            })
        default:
            return todos;
    }
}

export { todosReducer };