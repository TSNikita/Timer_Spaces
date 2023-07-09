import React from 'react';

import TimerUi from "./TimerUi/TimerUi";
import ButtonGroup from "../ButtonGroupContainer/ButtonGroup";

import HelpersTime from "./helpers";

const TimerContainer = () => {
    const {timer, handleStop, handleStart, handleReset, isTimer} = HelpersTime()

    return (
        <div>
            <TimerUi timer={timer}>
                <ButtonGroup isActive={isTimer} onClickStart={handleStart} onClickStop={handleStop} onClickPause={handleReset} />
            </TimerUi>
        </div>
    );
}

export default React.memo(TimerContainer);