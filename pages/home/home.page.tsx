"use client"

import { useState } from "react"

export const HomePage = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Client-Side rendered Home Page</div>

      <div>
        <p>Count: {count}</p>
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  )
}
