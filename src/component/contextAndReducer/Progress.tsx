import React, { useEffect, useRef, useState } from 'react'
import { todoType, useTimer } from './TodoContext'
import { time } from 'console'
type ProgressType = {
    data: todoType
}

// //Option 1: Use ReturnType<typeof setInterval> for timerRef
// This approach uses TypeScript’s ReturnType utility type to infer the correct type from setInterval
function Progress(props: ProgressType) {
    console.log('progress')
    let timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
    let [remainTime, setRemainTime] = useState<number>(Number(props.data.des) * 1000)
    let x = useTimer()
    console.log(x?.isRunning)
    if (remainTime <= 0 || !x?.isRunning) {
        clearInterval(timerRef.current!)
    }
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setRemainTime(pre => (pre - 50))
        }, 50)
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }

        }
    }, [x?.isRunning])
    return (
        <>
            <p>Text:{props.data.text}</p>
            <p>Remain_time: {(remainTime / 1000).toFixed(2)}</p>
            <div className="progress">
                <div className="progress-bar w-25" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
            <br /></>

    )
}

export default Progress