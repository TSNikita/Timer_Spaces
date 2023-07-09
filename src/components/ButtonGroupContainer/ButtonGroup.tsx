import React from 'react';

import Button from "../Button/Button";

import {ButtonContainer, ButtonCroupContainer} from './ButtonStyle'

interface ButtonGroup {
    isActive: boolean,
    onClickStart: () => void,
    onClickStop: () => void,
    onClickPause: () => void
}


const ButtonGroup: React.FC<ButtonGroup> = ({isActive, onClickStart, onClickStop, onClickPause}) => {
    return (
        <ButtonContainer>
            {!isActive ? (<Button title='Start' onClick={onClickStart}/>) : (
                <ButtonCroupContainer>
                    <Button title='Pause' onClick={onClickPause}  />
                    <Button title='Stop' onClick={onClickStop} />
                </ButtonCroupContainer>
            ) }
        </ButtonContainer>
    );
}

export default React.memo(ButtonGroup);