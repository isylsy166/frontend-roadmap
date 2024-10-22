import React, { useEffect } from 'react'
import style from '../../css/commons/followMouse.module.css'

export default function FollowMouse() {

  
  useEffect(() => {
    
    const page = document.getElementById('followMouse');
    const text = document.querySelector('h1');
    const cursor = document.getElementById('cursor');

    const handleMouseMove = (e) => {
      if (e.target === page || page.contains(e.target)) {
        // 마우스가 페이지 안에 있을 때만 좌표와 커서 업데이트
        text.innerText = `x: ${e.pageX} y: ${e.pageY}`;
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
      }
    };

    page.addEventListener("mousemove", handleMouseMove);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      page.removeEventListener("mousemove", handleMouseMove);
    };

  }, [])


  return (
    <div id='followMouse' className={style.frame}>
      <h1>FollowMouse</h1>
      <div id='cursor' className={style.cursor}></div>
    </div>
  )
}
