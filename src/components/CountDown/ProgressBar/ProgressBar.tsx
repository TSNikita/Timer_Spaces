import React from 'react';

import { Line } from 'rc-progress';
import {SpanPrecent, ContainerTime} from "./ProgresBarStyle";

interface ProgressBarPropsType {
    progress: number
}

const ProgressBar: React.FC<ProgressBarPropsType> = ({progress}) => {
    return (
        <ContainerTime>
            <SpanPrecent>
                <Line percent={progress} strokeWidth={3} strokeColor="green" />
                Результат {progress}%
            </SpanPrecent>
        </ContainerTime>

    );
}

export default React.memo(ProgressBar);