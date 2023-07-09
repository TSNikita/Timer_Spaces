import React, {useCallback, useEffect, useState} from 'react';

import useSound from "use-sound";
// @ts-ignore
import soundUrl from "../../assets/sound/soundMy.wav";



const useCountHelpers = () => {

    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [totalSeconds, setTotalSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0)
    const [sound, setSound] = useState<boolean>(false)


    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.5 }
    );

    useEffect(() => {
        let interval: number = 0
        if (isActive && totalSeconds > 0) {
            interval = window.setInterval(() => {
                setTotalSeconds((totalSeconds) => totalSeconds - 1)
                const timeMinutes = (minutes * 60 + seconds) - totalSeconds
                const resultProgress = timeMinutes / (minutes * 60 + seconds)
                const percentageProgress = resultProgress * 100
                setProgress(Math.ceil(percentageProgress));
                setSound(true)
            }, 1000)
        }
        else if (totalSeconds === 0 && sound === true) {
            play()
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, totalSeconds, sound])


    const handleSliderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const totalSeconds = parseInt(event.target.value, 10);
        setTotalSeconds(totalSeconds);
        setMinutes(Math.floor(totalSeconds / 60));
        setSeconds(totalSeconds % 60);
    },[minutes]);

    const handleMinutesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinutes = parseInt(event.target.value, 10);
        setMinutes(newMinutes);
        setTotalSeconds(newMinutes * 60 + seconds);
    }, [minutes]);

    const handleSecondsChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newSeconds = parseInt(event.target.value, 10);
        setSeconds(newSeconds);
        setTotalSeconds(minutes * 60 + newSeconds);
    },[seconds]);

    const handleStart = useCallback(() => {
        setIsActive(!isActive)
    }, [isActive])

    const handlePause = useCallback(() => {
        setIsActive(!isActive)
    },[isActive])

    const handleStop = useCallback(() => {
        setIsActive(false)
        setTotalSeconds(0)
        setProgress(0)
        setSound(false)
        stop()
    },[isActive])

    const minutesDisplay: number = Math.floor(totalSeconds / 60);
    const secondsDisplay: number = totalSeconds % 60;

    return (
        {handleStop,
            handlePause,
            handleStart,
            handleSecondsChange,
            handleMinutesChange,
            handleSliderChange,
            minutes,
            seconds,
            totalSeconds,
            isActive,
            progress,
            sound,
            minutesDisplay,
            secondsDisplay}
    );
}

export default useCountHelpers;