import React, {useCallback, useEffect, useState} from 'react';



function HelpersTime () {
    const [timer, setTimer] = useState<number>(0)
    const [isTimer, setIsTimer] = useState<boolean>(false)

    useEffect(() => {
        let interval: number = 0
        if(isTimer) {
            interval = window.setInterval(() => {
                setTimer(timer => timer + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isTimer])

    const handleStop = useCallback(() => {
        setIsTimer(false)
        setTimer(0)
    }, [isTimer])

    const handleStart = useCallback(() => {
        setIsTimer(true)
    },[isTimer])

    const handleReset = useCallback(() => {
        setIsTimer(!isTimer)
    },[isTimer])


    return {timer, handleStop, handleStart, handleReset, isTimer}
}

export default HelpersTime;