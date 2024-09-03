import React from 'react'
import Button from './Button'
import { useTimer } from './TodoContext'

function Header() {
    function startHandler() {
        x?.startTimer()
    }
    function stopHandler() {
        x?.endTimer()
    }
    let x = useTimer()
    return (
        <div style={{ border: "1px solid black", padding: '12px' }}>
            totoal lenth :{x?.todo.length}
            {x?.isRunning && <Button ele='button' onClick={startHandler}>Stop</Button>}
            {!(x?.isRunning) && <Button ele='button' onClick={stopHandler}>Start</Button>}

        </div>
    )
}

export default Header