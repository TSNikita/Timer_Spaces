import React from 'react';
import {NavLink} from "react-router-dom";

import Button from "../../components/Button/Button";

import "@fontsource/roboto";
import MyImage from '../../assets/icons/svg20.svg'

import {ImgStyle, HomeStyle, TitleHome, BlockButtonHome} from './HomeStyle'


function Home() {
    return (
        <HomeStyle>
            <ImgStyle src={MyImage} alt="mySvg"/>
            <TitleHome>Timer + CountDown</TitleHome>
            <BlockButtonHome>
                <NavLink to='/timer'>
                    <Button title='Timer'/>
                </NavLink>
                <NavLink to='/countDown'>
                    <Button title='CountDown'/>
                </NavLink>
            </BlockButtonHome>

        </HomeStyle>
    );
}

export default Home;