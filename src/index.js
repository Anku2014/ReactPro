import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
 
import reportWebVitals from './reportWebVitals';
 
const fetchValue=()=>{
  return{
    type:'FETCH_VALUE',
  }
}
 
const increment=()=>{
  return{
    type:'INCREMENT',
  }
}
 
const decrement=()=>{
  return{
    type:'DECREMENT',
  }
}
 
const counterReducer=(state=0,action)=>{
  switch(action.type){
    case 'FETCH_VALUE':
      return state;
      break;
      case 'INCREMENT':
        return state+1;
      case 'DECREMENT':
        return state-1;
        default:
          return state
          break;
  }
}
 
let store = createStore(counterReducer);
 
store.subscribe(()=>{console.log("Redux Values"+store.getState())})
 
store.dispatch(fetchValue());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


 
ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();