import React from 'react'
import { SvgXml } from 'react-native-svg';

export default function PlusIcon({ style, color }) {
  const svgContent = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 6L12 18" stroke="${color || '#D9D9D9'}" stroke-width="2" stroke-linecap="round"/>
  <path d="M18 12L6 12" stroke="${color || '#D9D9D9'}" stroke-width="2" stroke-linecap="round"/>
  </svg>
  `;

  return (
      <SvgXml style={style} xml={svgContent}/>
  )
}