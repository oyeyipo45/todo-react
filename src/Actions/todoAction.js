export const POST_TODO = "POST_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"



export const postTodo = (todo) => {
        return {
            type: POST_TODO,
            payload: todo
        }
}
   


export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}


export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}



  
