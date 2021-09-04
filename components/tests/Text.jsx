import { useState } from "react"
import { useSpring, animated } from 'react-spring'

export function Text() {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
    })
  
    return (
        <div>
            <button className="text-4xl" onClick={()=>{set(!flip)}}>{flip ? 'on' : 'off'}</button>
            <animated.h1 style={props}>hello</animated.h1>
        </div>
    )
  }