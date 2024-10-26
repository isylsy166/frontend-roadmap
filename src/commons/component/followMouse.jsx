import React, { useEffect, useState } from 'react';
import style from '../../styles/css/commons/followMouse.module.css';
import { Cursor } from '../../styles/emotion/followMouse.style';


export default function FollowMouse({ children, isHover  }) {

  useEffect(() => {
    const page = document.getElementById('followMouse');
    const cursor = document.getElementById('cursor');

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.07;

    const handleMouseMove = (e) => {
      targetX = e.pageX;
      targetY = e.pageY;
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;
    
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
    
      requestAnimationFrame(animateCursor);
    };

    page.addEventListener("mousemove", handleMouseMove);
    animateCursor();  // 애니메이션 시작

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      page.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id='followMouse' className={style.frame}>
      <Cursor id='cursor' isHover={isHover}/>
      {children}
    </div>
  );
}
