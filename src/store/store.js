import { createStore, combineReducers} from "redux";
import { POST_TODO, UPDATE_TODO, DELETE_TODO } from '../Actions/todoAction';
import { todoStoreReducer } from '../reducers/todoStoreReducer';
import { todoReducer } from '../reducers/todoReducer';
import { addToTodoStore, removeFromTodoStore } from '../Actions/todoStoreActions';




export const rootReducer = combineReducers({
    todoReducer,
    todoStoreReducer

});
  

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})



export default store;