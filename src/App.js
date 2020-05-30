// import React, {Component} from 'react';
// import './App.css';
// import { connect } from "react-redux"
// import { add, subtract } from "./Actions/todoAction"

// class App extends Component{
//   render (){
//     return (
//       <div>
//          <button onClick = {() => this.props.subtract()}>decrement</button>
//         <pre>
//           {JSON.stringify(this.props.reduxStateAsProps, null, 4)} 
//         </pre>
//         <button onClick = {() => this.props.add()}>increment</button>

//       </div> 
//     );
//   }
// }





// const mapStateToProps = (state) => ({reduxStateAsProps: state})


// export default connect(mapStateToProps, { add, subtract })(App)


import React from 'react'
import store from './store/store';
import { v4 as uuidv4 } from 'uuid';
// import { todoStoreReducer } from '../reducers/todoStoreReducer';
// import { todoReducer } from '../reducers/todoReducer';
// import { addToTodoStore, removeFromTodoStore } from '../Actions/todoStoreActions';
import { postTodo, deleteTodo, updateTodo } from './Actions/todoAction'


console.log(store);



const todo = [
  {
    // id: uuidv4(),
    id: 1,
    title: "my first title",
  },
  {
    id: 2,
    // id: uuidv4(),
    title: "my second title",
  },
  {
    id: 3,
    // id: uuidv4(),
    title: "my third title",
  },
  {
    id: 4,
    // id: uuidv4(),
    title: "my fourth title",
  },
];

const todos = {
  id: 4,
  // id: uuidv4(),
  title: "my fourth title",
};

const updatedTodo = {
  id: 3,
  title: "updated Title"
}

store.dispatch(postTodo(todo))
store.dispatch(deleteTodo(todos))
store.dispatch(updateTodo(updatedTodo))


function App() {
  
  return (
    <p> damilola</p>
  );
}


export default App;