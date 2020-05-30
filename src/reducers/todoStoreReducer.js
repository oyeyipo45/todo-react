
import { ADD_TO_TODO_STORE, REMOVE_FROM_TODO_STORE } from '../Actions/todoStoreActions';


const initialState = {todoStore: []};


export const todoStoreReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_TODO_STORE:
            return {
                todoStore: [...state.todoStore, ...action.payload]
            }
        case REMOVE_FROM_TODO_STORE:
           const todoStore = state.todoStore
           const newTodoStore = todoStore.filter(book => book.id !== action.payload.id) 
       
           return{
              todoStore : [...newTodoStore]
           }
        default:
             return state;
    }
}