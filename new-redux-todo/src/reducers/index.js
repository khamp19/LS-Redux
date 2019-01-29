//reducers
const initialState = {
    todos: [
        {value: 'make bed', completed: false}, 
        {value: 'do laundry', completed: false}
    ],
    newTodo: {
        value: '',
        completed: false
    }
}

const todosReducer = (todos = initialState, action) => {
    switch (action.type) {
        // case 'GET_TODOS':
        //     return [...todos, ...action.payload];
        case 'ADD_TODO':
            return [...todos, ...action.payload];
        default:
            return todos;
    }
}

export { todosReducer };