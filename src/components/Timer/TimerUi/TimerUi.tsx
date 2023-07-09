import React from 'react';

import {BlockSpan, SpanStyle, TimerCount} from "./TimerUi_Style";

interface TimerUiPropsType {
    timer: number,
    children: React.ReactNode
}

const TimerUi: React.FC<TimerUiPropsType> = ({timer, children}) => {
    return (
        <TimerCount>
            <BlockSpan>
                <SpanStyle>{('0' + Math.floor((timer / 60000) % 60)).slice(-2)}:</SpanStyle>
                <SpanStyle>{('0' + Math.floor((timer / 1000) % 60)).slice(-2)}:</SpanStyle>
                <SpanStyle>{('0' + (timer / 10) % 100).slice(-2)}</SpanStyle>
            </BlockSpan>
            {children}
        </TimerCount>

    );
}

export default React.memo(TimerUi);