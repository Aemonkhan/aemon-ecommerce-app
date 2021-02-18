import React from 'react'

export default function ButtonView({text , color}) {
    return (
        <div>
               <button style={{backgroundColor:color}} type='submit'>{text} 
               </button>
        </div>
    )
}
