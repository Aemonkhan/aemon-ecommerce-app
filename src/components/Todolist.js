  
  
import React from 'react'
import { useTransition, animated } from 'react-spring'

function Todolist({ todolist }) {


    const transitions = useTransition(todolist, todolist => todolist.id, {
        // from: { transform: 'translate3d(0,-40px,0)' },
        // enter: { transform: 'translate3d(0,0px,0)' },
        // leave: { transform: 'translate3d(0,-40px,0)' },
        from :{ marginLeft: - 500},
        enter: {marginLeft: 0}
    })

    return (
        <>
            {
                transitions.map(
                    ({ item, props, key }) =>
                    <animated.div key={key} style={props}>{item.title}</animated.div>
                )}
            {/* <ul>
           { todolist.map(
               (item)=> (
                   <li key={item.id}>{item.title}</li>
               )
           )}
           </ul> */}
        </>
    )
}

export default Todolist
