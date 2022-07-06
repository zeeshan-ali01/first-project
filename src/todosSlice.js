import { createSlice } from "@reduxjs/toolkit";

const todosList = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            const {id, text} = action.payload;
            state.todos.push({id, text, completed: false});
        }
    }
})

export const {addTodos} = todosList.actions;

export default todosList.reducer;