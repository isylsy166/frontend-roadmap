import React from 'react'
import { Frame, Icon } from '../../../styles/emotion/iconImageBox.style'
import { useMediaQuery } from 'react-responsive';

export default function IconImageBox() {

  const isPc = useMediaQuery({ minWidth:581 });
  const isMobile = useMediaQuery({ maxWidth: 580 });
  const width = isPc ? '1200px' : isMobile ? '500px' : '1200px';
  const size = isPc ? '100px' : isMobile ? '45px' : '60px';

  return (
    <Frame width={width}>
        <Icon delay={3.0} size={size} src='/images/html5_1IJr1hb.webp' />
        <Icon delay={3.5} size={size} src='/images/css3.webp'/>
        <Icon delay={4.0} size={size} src='/images/JS.webp'/>
        <Icon delay={4.5} size={size} src='/images/react_nPmZNtH.webp'/>
        <Icon delay={5.0} size={size} src='/images/reduxBadge.webp'/>
        <Icon delay={5.5} size={size} src='/images/typescript_psOTuYC.webp'/>
        <Icon delay={6.0} size={size} src='/images/JS_Node.webp'/>
    </Frame>
  )
}
