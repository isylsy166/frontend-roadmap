import React, { useEffect, useState } from 'react';
import style from '../../../styles/css/layout/mainText.module.css';
import { useMediaQuery } from 'react-responsive';
import { AnimatedText, Circle } from '../../../styles/emotion/mainText.style';
import IconImageBox from './iconImageBox';
import { useNavigate } from "react-router-dom";

export default function MainText({isHover, setIsHover }) {

    const navigate = useNavigate();

    const isPc = useMediaQuery({
        query: "(min-width:581px)"
      });
      const isMobile = useMediaQuery({
        query: "(max-width:580px)"
      });

    const textSize = isPc ? '70px' : isMobile ? '35px' : '70px';


    return (
    <div className={style.frame}>

        <Circle size={30} delay={0.2} />
        <Circle size={25} delay={0.4} />
        <Circle size={20} delay={0.6} />
        <Circle size={15} delay={0.8} />
        <Circle size={10} delay={1.0} />

        <div className={style.textBox}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={() => navigate('/roadmap')}>
          <AnimatedText size={textSize}>Frontend Devloper</AnimatedText>
          <AnimatedText size={textSize}>Roadmap</AnimatedText>
        </div>

        <IconImageBox/>
        
    </div>
    );
}
