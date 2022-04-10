import { getValue } from '@testing-library/user-event/dist/utils';
import React,{useState,useRef,useEffect} from 'react'

const Counter:React.FC<{}> = () => {
  const [value,setValue] = useState<number>(0)
  
  const increment = () =>{
    setValue((prevState)=>prevState+1)
  }
  const decrement = () =>{
    setValue((prevState)=>prevState-1)
  }

  const renderTimes = useRef<number>(0)

  useEffect(()=>{
    renderTimes.current++
  })

  const ref = useRef<HTMLInputElement>(null!)

  const focusInput = ()=>{
    // const current = ref.current
    // if(current != null){
    //   current.focus()
    // }
    ref.current.focus();
  }

  return (
  <div>
    <div>value:{value}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>

    <div>This component was re-rendered {renderTimes.current} times</div>
    <input ref={ref} type="text"></input>
    <button onClick={focusInput}>Click Me</button>
  </div>
  )
}

export default Counter;