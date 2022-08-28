import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {useDispatch} from 'react-redux';
import { addMessageRequest } from './redux/action';
function App() {
  const [count, setCount] = useState(0);
  const dispatch=useDispatch();


  return (
    <div className="App">
           <div  id='main-container'>
            <div id='display'>     display</div>
            <div id='send-div'> <input type="text" placeholder='add your message' />   <button id='button' onClick={(()=>{
             
            })}>Send</button>

</div>
       </div>
         
    </div>
  )
}

export default App
