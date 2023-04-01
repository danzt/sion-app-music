/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"

interface CounterProps {
  InitialCount: number
}

export const Counter = ({InitialCount} : CounterProps) => {
  const [count, setCount] = useState(InitialCount)
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(() => count + 1)}> Increment </button>
      <button onClick={() => setCount(() => count - 1)}> Decrement </button>
    </div>
  )
}