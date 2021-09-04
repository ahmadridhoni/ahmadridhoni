import { useState } from "react"
import { animated, useTransition } from 'react-spring'

export function Text() {
    const [items, setitems] = useState(false)

    const transition = useTransition(items, {
        from: {opacity: 0},
        enter: () => (next) => (
            next({opacity: 1})
        ),
        leave: {opacity: 0}
    })
  
    return (
        <div>
            <button className="text-4xl" onClick={()=>{setitems(!items)}}>{items ? 'on' : 'off'}</button>
            {
                transition((style, item)=> 
                    item ? <animated.div style={style}>get</animated.div> : ''
                )
            }
        </div>
    )
  }