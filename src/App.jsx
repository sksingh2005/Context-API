import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Countcontext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Countcontext.Provider value={count}>
      <Count setCount={setCount}/> 
      </Countcontext.Provider>
     
    </div>
    
    
  )
}
function Count({setCount}){
  return <div>
    <CountRender/>
    <Buttons setCount={setCount}/>
  </div>
}
function CountRender(){
  const count=useContext(Countcontext);
  return <div>
    {count}
  </div>
}
function Buttons({setCount}){
  const count=useContext(Countcontext);
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increment</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrement</button>
  </div>
}

export default App
