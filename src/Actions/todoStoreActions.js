export const ADD_TO_TODO_STORE = "ADD_TO_TODO_STORE";
export const REMOVE_FROM_TODO_STORE = "REMOVE_FROM_TODO_STORE";


export const addToTodoStore = (todo) => {
    return {
        type : "ADD_TO_TODO_STORE",
        payload: todo
    }
}


export const removeFromTodoStore = (todo) => {
    return {
        type : REMOVE_FROM_TODO_STORE,
        payload: todo
    }
}