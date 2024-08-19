import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Countcontext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Countcontext.Provider value={count}>
     <Count count={count}/> 
    </Countcontext.Provider>
     
    </>
  )
}
function Count({count}){
  return <div>
    <CountRender/>
    <Buttons setCount={setCount}/>
      <h1>{count}</h1>
  </div>
}
function CountRender(){
  const count=useContext(Countcontext);
  return <div>
    {count}
  </div>
}
function Buttons({count,setCount}){
  const count=useContext(Countcontext);
  return <div>
    <button onClick={()=>{
      setCount(count=count+1);
    }}>Increment</button>
    <button onClick={()=>{
      setCount(count--);
    }}>Decrement</button>
  </div>
}

export default App
