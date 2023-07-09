import React, {useState, useEffect, useMemo, useCallback} from 'react'

import useSound from 'use-sound';

import 'rc-slider/assets/index.css'

// @ts-ignore
import soundUrl from '../../assets/sound/soundMy.wav';

import TimerCountDownComponents from "./TimerCountDownComponents";
import ProgressBar from "./ProgressBar/ProgressBar";
import {Container} from "./TimerCountDownStyle";
import useCountHelpers from "./helpers";
import ButtonGroup from "../ButtonGroupContainer/ButtonGroup";
import SliderComponents from "./SliderContainer/SliderComponents";

const TimerCountDownContainer = () => {
    const {handleStop,
        handlePause,
        handleStart,
        handleSecondsChange,
        handleMinutesChange,
        handleSliderChange,
        totalSeconds,
        isActive,
        progress,
        minutesDisplay,
        secondsDisplay} = useCountHelpers()

    return (
        <Container>
            <TimerCountDownComponents handleSecondsChange={handleSecondsChange}
                                      handleSliderChange={handleSliderChange}
                                      handleMinutesChange={handleMinutesChange}
                                      minutesDisplay={minutesDisplay}
                                      secondsDisplay={secondsDisplay}
                                      totalSeconds={totalSeconds}
                                      onClickPause={handlePause}
                                      onClickStop={handleStop}
                                      onClickStart={handleStart}
                                      isActive={isActive} />

                <ButtonGroup isActive={isActive} onClickStart={handleStart} onClickStop={handleStop} onClickPause={handlePause} />
                <ProgressBar progress={progress} />
        </Container>
    )
}

export default React.memo(TimerCountDownContainer)