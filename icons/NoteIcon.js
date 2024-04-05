import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import { globalStyles } from '../styles/Globals';

export default function NoteIcon({ style, color }) {
  const svgContent = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1716 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V14.1716C21 14.5803 21 14.7847 20.9239 14.9685C20.8478 15.1522 20.7032 15.2968 20.4142 15.5858L15.5858 20.4142C15.2968 20.7032 15.1522 20.8478 14.9685 20.9239C14.7847 21 14.5803 21 14.1716 21Z" stroke="${color || '#989898'}" stroke-width="2"/>
      <path d="M14 21V16.3333C14 15.2334 14 14.6834 14.3417 14.3417C14.6834 14 15.2334 14 16.3333 14H21" stroke="${color || '#989898'}" stroke-width="2"/>
    </svg>`;

  return (
      <SvgXml style={[globalStyles.icon, style]} xml={svgContent}/>
  )
}