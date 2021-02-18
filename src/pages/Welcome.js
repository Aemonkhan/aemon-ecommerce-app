import React from 'react'
const Welcome = ({handleLogout}) => {
    return(
        <>
        <nav>
            <h2>WELCOME!!!</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        </>
    )
}
export default Welcome;