import React from 'react'
import {useDispatch, useSelector} from  'react-redux'
import { increment } from './store/Reducers/counterSlice';


function App() {
  const dispatch = useDispatch();

  const {value}= useSelector(store=>store.counterReducer)
  const incrementHandler=()=>{
    dispatch(increment(value+1));
  }
  return (
    <div>
      <h1>{value}</h1>
      <button className="text-3xl" onClick={incrementHandler} >increment value</button>
    </div>
  )
}
export default App