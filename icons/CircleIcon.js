import React from 'react'
import { SvgXml } from 'react-native-svg';

export default function CircleIcon({ style }) {
  const svgContent = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="white"/>
      <circle cx="12" cy="12" r="11" stroke="black" stroke-opacity="0.3" stroke-width="2"/>
    </svg>`;

  return (
      <SvgXml style={style} xml={svgContent}/>
  )
}