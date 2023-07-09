import React from 'react';

import Input from "./Input/Input";
import SliderComponents from "./SliderContainer/SliderComponents";

import TimeUiCountDown from "./TimeUiCountDown/TimeUiCountDown";

interface TimerCountDownPropsType {
    totalSeconds: number,
    handleMinutesChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSecondsChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    minutesDisplay: number,
    secondsDisplay: number,
    isActive: boolean,
    onClickStart: () => void,
    onClickStop: () => void
    onClickPause: () => void
}

const TimerCountDownComponents: React.FC<TimerCountDownPropsType> = (
    {totalSeconds,
        handleMinutesChange,
        handleSecondsChange,
        handleSliderChange,
        minutesDisplay,
        secondsDisplay,
        isActive
        }) => {
    return (
        <>
            <div>
                <Input value={minutesDisplay} title='Минуты' max={720} name='minutes' onChange={handleMinutesChange} disabled={isActive} />
                <Input value={secondsDisplay} title='Секунды' max={59} name='seconds' onChange={handleSecondsChange} disabled={isActive} />
            </div>
                <SliderComponents value={totalSeconds} disabled={isActive} onChange={handleSliderChange}  key={1} />
                <TimeUiCountDown minutesDisplay={minutesDisplay} secondsDisplay={secondsDisplay}  />
        </>
    );
}

export default TimerCountDownComponents;