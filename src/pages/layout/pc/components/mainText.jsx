import React, { useEffect, useState } from 'react';
import style from '../../../../styles/css/layout/mainText.module.css';
import { useMediaQuery } from 'react-responsive';
import { AnimatedText, Circle } from '../../../../styles/emotion/mainText.style';

export default function MainText({isHover, setIsHover }) {

    const isPc = useMediaQuery({ minWidth:581 });
    const isMobile = useMediaQuery({ maxWidth: 580 });
    const textSize = isPc ? '70px' : isMobile ? '45px' : '70px';

    return (
    <div className={style.frame}>
        <Circle size={30} delay={0.2} />
        <Circle size={25} delay={0.4} />
        <Circle size={20} delay={0.6} />
        <Circle size={15} delay={0.8} />
        <Circle size={10} delay={1.0} />

        <div className={style.textBox} isHover={isHover}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}>
          <AnimatedText size={textSize}>Frontend Devloper</AnimatedText>
          <AnimatedText size={textSize}>Roadmap</AnimatedText>
        </div>
        
    </div>
    );
}
