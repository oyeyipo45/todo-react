import {POST_TODO, DELETE_TODO, UPDATE_TODO} from "../Actions/todoAction"


const initialState = { 
    todos : [] 
};


export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case POST_TODO:
            return {
                todos: [...state.todos, ...action.payload]
            }

        case DELETE_TODO:
            
            const arr = [...state.todos]
            const remainingTodosArr = arr.filter(todo => todo.id !== action.payload.id)
            console.log(arr);
            return{
               todos: remainingTodosArr
            }

        case UPDATE_TODO:
            
            const todosArray = [...state.todos]
            const indexOfTodoToUpdate = todosArray.findIndex(todo => todo.id === action.payload.id)
            console.log(indexOfTodoToUpdate)
            todosArray[indexOfTodoToUpdate].title  =  action.payload.title

            console.log(todosArray)
            // const todo = Arr.filter(todo => todo.id === action.payload.id)
            // // todo[0].title = "hello world"
            // console.log(Arr)
            // console.log(todo)
            return  {
               todosArray
            }
             
        default:
            return state
    }
}