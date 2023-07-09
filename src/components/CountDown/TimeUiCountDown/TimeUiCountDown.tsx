import React from 'react';
import PropTypes from 'prop-types';
import {TimeBlock} from "./TimeUiCountDown_Style";

interface TimeUiCountDownPropsType {
    minutesDisplay: number,
    secondsDisplay: number
}

const TimeUiCountDown: React.FC<TimeUiCountDownPropsType> = ({minutesDisplay, secondsDisplay}) => {
    return (
        <TimeBlock>
            {minutesDisplay < 10 ? "0" : ""}
            {minutesDisplay}:{secondsDisplay < 10 ? "0" : ""}
            {secondsDisplay}
        </TimeBlock>
    );
}

export default TimeUiCountDown;