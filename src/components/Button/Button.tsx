import React from 'react';

import {ButtonStyle} from './ButtonStyle'

 interface ButtonType {
     title: string,
     onClick?: () => void,
 }

function Button({title, onClick}: ButtonType) {
    return (
            <ButtonStyle onClick={onClick} >
                {title}
            </ButtonStyle>
    );
}

export default React.memo(Button);