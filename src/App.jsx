import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {useDispatch,useSelector} from 'react-redux';
import { addMessageRequest, addMessageSuccess } from './redux/action';
function App() {
  const [count, setCount] = useState(0);
  const [current,setCurrent]=useState(null);
  const [message,setMessage]=useState('');
  const messages=useSelector(state=>state.data);

  const handleChange=((e)=>{
    setMessage(e.target.value);

  })
  console.log(message);
  const dispatch=useDispatch();
  const handleSend=(()=>{
    if(message==current){
      alert('Hey ,Dont send same message again,not needed')
    }
    else{
      dispatch(addMessageSuccess(message));
      setCurrent(message);
    }

   
  })

  console.log(messages);


  return (
    <div className="App">
           <div  id='main-container'>
            <div id='my-chat'>My chat-app</div>
            <div style={{height:"50px"}}></div>
            <div id='display'>    {messages.map((e)=>{
              return <div id='single-message'>{e}</div>
            })}</div>
            <div id='send-div'> <input id='input' type="text" onChange={handleChange} placeholder='add your message' />   <button id='button' disabled={message==''} onClick={handleSend}>Send</button>

</div>
       </div>
         
    </div>
  )
}

export default App
